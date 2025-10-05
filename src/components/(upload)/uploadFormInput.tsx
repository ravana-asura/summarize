"use client";
import { forwardRef } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface uploadFormInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
}
export const UploadFormInput = forwardRef<
  HTMLFormElement,
  uploadFormInputProps
>(({ onSubmit, isLoading }, ref) => {
  return (
    <form
      ref={ref}
      action=""
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="space-y-2"
    >
      <input
        id="file"
        type="file"
        name="file"
        accept="application/pdf"
        disabled={isLoading}
        className={cn(isLoading && "opacity-50 cursor-not-allowed")}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center">
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </span>
        ) : (
          "Upload Your PDF"
        )}
      </button>
    </form>
  );
});

UploadFormInput.displayName = "UploadFormInput";
export default UploadFormInput;
