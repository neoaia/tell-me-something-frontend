"use client";

import { useState } from "react";
import Button from "@/components/Button";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

const Search = ({ value, onChange, onSubmit }: SearchProps) => {
  return (
    <div className="w-full my-7 flex flex-row gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.();
        }}
        placeholder="Search for a name.."
        className="border border-gray-300 active:border-gray-600 p-4 rounded-2xl flex-1"
      />
      <Button label="Search" />
    </div>
  );
};

export default Search;
