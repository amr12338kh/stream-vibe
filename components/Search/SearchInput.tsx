"use client";

import React from "react";
import { Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const formSchema = z.object({
  input: z.string().min(0).max(50),
});

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: searchParams.get("query") || "",
    },
  });

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  const handleInputChange = (value: string) => {
    form.setValue("input", value);
    handleSearch(value);
  };

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-60"
                    size={20}
                  />
                  <Input
                    {...field}
                    placeholder="Search movies..."
                    className="w-full pl-10 text-lg rounded-lg"
                    onChange={(e) => handleInputChange(e.target.value)}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
