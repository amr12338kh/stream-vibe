/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useState } from "react";
import CountrySelect from "./CountrySelect";
import FormField from "./FormField";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const messageElement = e.currentTarget.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;
    const phoneElement = e.currentTarget.querySelector(
      'input[type="tel"]'
    ) as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      message: messageElement?.value || "",
      phone: phoneElement?.value || "",
    }));

    if (
      !formData.firstName ||
      !formData.email ||
      !messageElement?.value ||
      !formData.terms
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row lg:justify-between items-center w-full gap-10 xl:gap-20"
    >
      <div className="w-full lg:w-[60%]">
        <Heading
          title="Welcome to our support page!"
          subtitle="We're here to help you with any problems you may be having with our product."
        />
        <div>
          <Image
            src="/contact-image.png"
            alt="contact image"
            width={500}
            height={500}
            priority
            className="border-4 border-black-15 rounded-xl"
          />
        </div>
      </div>

      <div className="w-full flex flex-col bg-black-6 border border-black-15 h-full p-5 sm:p-10 rounded-xl gap-y-10">
        <div className="grid md:grid-cols-2 gap-y-6 xl:gap-y-10 gap-x-8 xl:gap-x-16">
          <FormField
            label="First Name"
            name="first_name"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <FormField
            label="Last Name"
            name="last_name"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <FormField
            label="Email"
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <div className="space-y-3">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex items-center gap-4">
              <CountrySelect
                selectedCountry={selectedCountry}
                onCountryChange={setSelectedCountry}
              />
              <div className="w-full">
                <Input
                  placeholder="Enter Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            placeholder="Enter your Message"
            rows={8}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-y-6 sm:gap-y-0">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, terms: checked as boolean }))
              }
            />
            <Label htmlFor="terms" className="text-gray-60 cursor-pointer">
              I agree with Terms of Use and Privacy Policy
            </Label>
          </div>
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="mr-2">Sending...</span>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
