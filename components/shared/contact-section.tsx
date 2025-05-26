"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  className?: string;
  titleClassName?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  separatorClassName?: string;
}

export function ContactSection({
  className = "",
  titleClassName = "text-2xl font-bold",
  formClassName = "space-y-4 mt-6",
  inputClassName = "",
  buttonClassName = "",
  separatorClassName = "my-4",
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();
  
  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!");
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className={className}>
      <h2 className={titleClassName}>Contact Me</h2>
      <Separator className={separatorClassName} />
      
      <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
        <div>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className={inputClassName}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Input
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="Your Email"
            className={inputClassName}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className={`min-h-[120px] ${inputClassName}`}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className={buttonClassName}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}