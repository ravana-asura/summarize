"use server";

import { fetchAndExtractPdftext } from "@/lib/langchain";
import { generateSummaryfromOpenAi } from "@/lib/openai";
import { generateSummaryfromGemini } from "@/lib/gemini";
type UploadResponse = {
  serverData: {
    userId: string;
    fileUrl: string;
    fileName: string;
    fileSize: number;
    fileKey: string;
  };
};

export default async function generatePdfSummary({
  uploadResponse,
}: {
  uploadResponse: UploadResponse[];
}) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: "No upload response",
      summary: null,
    };
  }

  const { serverData } = uploadResponse[0];
  const { userId, fileUrl: pdfUrl, fileName } = serverData;

  if (!pdfUrl) {
    return {
      success: false,
      message: "No PDF URL found",
      summary: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdftext(pdfUrl);
    console.log("Extracted PDF Text:", pdfText);

    let summary;
    try {
      // Primary: Try OpenAI first
      summary = await generateSummaryfromOpenAi(pdfText);
      console.log("✅ OpenAI Summary Generated:", summary);
    } catch (error) {
      console.log("❌ OpenAI failed, trying Gemini fallback...", error);

      // Fallback: Try Gemini for any OpenAI failure
      try {
        summary = await generateSummaryfromGemini(pdfText);
        console.log("✅ Gemini Summary Generated (Fallback):", summary);
      } catch (geminiError) {
        console.error("❌ Both OpenAI and Gemini failed:", {
          openaiError: error,
          geminiError,
        });
        throw new Error("Failed to generate summary with both AI services");
      }
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary from OpenAI",
        summary: null,
      };
    }
    return {
      success: true,
      message: "PDF processed successfully",
      summary,
      userId,
      fileName,
    };
  } catch (error) {
    console.error("Error processing PDF:", error);
    return {
      success: false,
      message: "Failed to process PDF",
      summary: null,
    };
  }
}
