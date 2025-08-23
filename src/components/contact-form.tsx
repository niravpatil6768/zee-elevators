"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

type FormState = {
  message: string;
  success: boolean;
} | null;

async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // const firebaseConfig: FirebaseOptions = {
  //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // };

  const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDW9MAvg0jMSERCUWqKQdSI81h7PmhyTNM",
    authDomain: "zee-plus.firebaseapp.com",
    projectId: "zee-plus",
    storageBucket: "zee-plus.firebasestorage.app",
    messagingSenderId: "346277329964",
    appId: "1:346277329964:web:181d4b3773a4efc59be589",
    measurementId: "G-R3FBCE8SJ3",
  };

  try {
    const parsedData = formSchema.safeParse(formData);

    if (!parsedData.success) {
      return {
        message: "Invalid form data.",
        success: false,
      };
    }

    // Only proceed with Firebase if a project ID is configured
    if (1) {
      let app;
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApps()[0];
      }
      const db = getFirestore(app);

      await addDoc(collection(db, "website-inquiries"), {
        ...parsedData.data,
        createdAt: serverTimestamp(),
      });
    } else {
      console.log(
        "Firebase project ID not found. Skipping Firestore submission. Data:",
        parsedData.data
      );
    }

    return {
      message: "Thank you! Your message has been sent.",
      success: true,
    };
  } catch (error) {
    console.error("Firestore submission error:", error);
    return {
      message:
        "An unexpected error occurred while sending your message. Please try again.",
      success: false,
    };
  }
}

const initialState: FormState = null;

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => formAction(data))}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your inquiry..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
