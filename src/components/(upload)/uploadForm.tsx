"use client";

import { z } from "zod";
import UploadFormInput from "./uploadFormInput";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import generatePdfSummary from "@/app/actions/uploadAction";
import { useRef, useState } from "react";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size should be less than 20MB"
    )
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed"
    ),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader");
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    try {
      setIsLoading(true);

      const formdata = new FormData(event.currentTarget);
      const file = formdata.get("file") as File;

      // 🔍 Validation with Toast
      const validatedFields = schema.safeParse({ file });
      if (!validatedFields.success) {
        const errorMessage =
          validatedFields.error.issues[0]?.message || "Invalid file";
        toast.error("Validation Failed!", {
          description: errorMessage,
        });
        setIsLoading(false);
        return;
      }

      // ✅ Validation Success Toast
      toast.success("File Validated!", {
        description: `${file.name} is ready for upload`,
        duration: 2000,
      });

      // Upload with toast feedback
      toast.loading(`Uploading ${file.name}...`);

      let summaryResult;
      try {
        const result = await startUpload([file]);

        if (!result) {
          toast.error("Upload Error!");
          return;
        }

        toast.success(`Upload successful! ${file.name} uploaded`);

        //parse the pdf using langchain
        summaryResult = await generatePdfSummary({ uploadResponse: result });
        console.log("Summary:", summaryResult);
      } catch (error) {
        toast.error("Upload failed! Please try again");
        return;
      }

      if (summaryResult) {
        toast("Saving PDF", {
          description: "Hang on! we are saving your summary",
        });
        // Optionally handle summaryResult.summary here
      }

      formElement.reset();
      //summarize the pdf using ai
      //redirect to [id] summary page
    } catch (error) {
      setIsLoading(false);
      console.error("Error in handleSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <UploadFormInput isLoading={isLoading} onSubmit={handleSubmit} />
    </div>
  );
};
export default UploadForm;
