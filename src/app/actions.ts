
"use server";

import { z } from "zod";



const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form validation failed.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Here you would typically save to Firebase Firestore
    // For example:
    // import { db } from "@/lib/firebase"; // Assuming you have a firebase setup
    // await db.collection("contacts").add({ name, email, message, submittedAt: new Date() });

    console.log("Contact form submitted:", { name, email, message });
    
    return {
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
