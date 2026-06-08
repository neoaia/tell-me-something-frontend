"use client";

import Button from "@/components/Button";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  isDisabled: boolean;
}

const Search = ({ value, onChange, onSubmit, isDisabled }: SearchProps) => {
  return (
    <div className="w-full my-7 flex flex-row gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.(value);
        }}
        placeholder="Search for a name.."
        className="border border-gray-300 active:border-gray-600 px-7 py-4 rounded-2xl flex-1"
        disabled={isDisabled}
      />
      <Button
        label="Search"
        onClick={() => onSubmit?.(value)}
        disabled={isDisabled}
      />
    </div>
  );
};

export default Search;
