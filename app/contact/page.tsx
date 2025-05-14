"use client";

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { PartyPopper, Users, Heart, Phone, Mail, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  mobile: z.string().min(10, { message: "Please enter a valid mobile number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  dob: z.string(),
  occupation: z.string().min(2, { message: "Occupation must be at least 2 characters." }),
  spouseName: z.string().min(2, { message: "Spouse name must be at least 2 characters." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      dob: "",
      occupation: "",
      spouseName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      const formattedDate = new Date(values.dob).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      const message = `*New Phoenixx Club Member Registration* 🎉

🎤 *Name:* ${values.name}
❤️ *Spouse Name:* ${values.spouseName}
📞 *Phone:* ${values.mobile}
📧 *Email:* ${values.email}
🎂 *Date of Birth:* ${formattedDate}
💼 *Occupation:* ${values.occupation}

Welcome to the club! ✨`;

      const phoneNumber = "919977334588";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Reset form after successful submission
      form.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          {/* <Image 
            src="/logo.png" 
            alt="The Phoenixx Club" 
            width={80} 
            height={80} 
            className="mx-auto mb-4"
          /> */}
          <h1 className="text-4xl font-bold text-[#ffb74d]">
            Join The Phoenixx Club
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            🎉 Where Luxury, Laughter and Legacy come together! 🌟
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="space-y-1 text-center bg-gradient-to-r from-[#ffb74d]/10 to-purple-100 p-8">
            <Image 
              src="/logo.png" 
              alt="The Phoenixx Club" 
              width={60} 
              height={60} 
              className="mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-gray-800">New Member Registration</h2>
            <p className="text-gray-600">We're excited to have you join our exclusive club!</p>
          </CardHeader>

          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { 
                      name: "name", 
                      label: "🎤 Your Awesome Name", 
                      placeholder: "What should we call you?",
                      icon: <Users className="h-4 w-4" />
                    },
                    { 
                      name: "spouseName", 
                      label: "❤️ Spouse Name", 
                      placeholder: "Share your spouse's name",
                      icon: <Heart className="h-4 w-4" />
                    },
                    { 
                      name: "mobile", 
                      label: "📞 Phone Number", 
                      placeholder: "Let's stay connected!", 
                      type: "tel",
                      icon: <Phone className="h-4 w-4" />
                    },
                    { 
                      name: "email", 
                      label: "📧 Email Address", 
                      placeholder: "Drop your email here!", 
                      type: "email",
                      icon: <Mail className="h-4 w-4" />
                    },
                    { 
                      name: "dob", 
                      label: "🎂 Your Birthday", 
                      placeholder: "", 
                      type: "date",
                      icon: <PartyPopper className="h-4 w-4" />
                    },
                    { 
                      name: "occupation", 
                      label: "💼 What You Do", 
                      placeholder: "Tell us about your super power!",
                      icon: <Briefcase className="h-4 w-4" />
                    },
                  ].map((field) => (
                    <FormField
                      key={field.name}
                      control={form.control}
                      name={field.name as keyof z.infer<typeof formSchema>}
                      render={({ field: f }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            {field.icon}
                            {field.label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type={field.type || "text"}
                              placeholder={field.placeholder}
                              className="bg-white/80 border border-purple-300 rounded-lg shadow-sm 
                                         focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400 
                                         transition-all duration-200 hover:border-purple-500"
                              {...f}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-500" />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                <CardFooter className="pt-4 px-0">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white
                               rounded-lg py-3 text-lg font-semibold shadow-md
                               hover:shadow-yellow-400/60 transition-all duration-200
                               hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '📱 Opening WhatsApp...' : '🎉 Join the Fun!'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
