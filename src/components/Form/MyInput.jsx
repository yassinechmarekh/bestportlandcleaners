import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function MyInput({label, placeholder, type, id}) {
  return (
    <>
      <Label htmlFor={id} className={"text-steel-blue font-bold"}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className={
          "focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon mt-1"
        }
      />
    </>
  );
}
