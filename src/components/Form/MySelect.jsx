import React from "react";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

export default function MySelect({label, placeholder, items}) {
  return (
    <>
      <Label className={"text-steel-blue font-bold"}>
        {label}
      </Label>
      <Select>
        <SelectTrigger className="focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon text-slate-600 mt-1">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
