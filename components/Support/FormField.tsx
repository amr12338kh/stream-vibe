import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormFieldProps } from "@/types/types";

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
