// geminiSummary.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "./prompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateSummaryfromGemini(
  pdfText: string
): Promise<string> {
  try {
    // Debug: Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    // Get the generative model - using the latest available model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Combine system prompt with user content
    const prompt = `${SUMMARY_SYSTEM_PROMPT}\n\n${pdfText}`;

    const response = await model.generateContent(prompt);

    const result = await response.response;
    const text = result.text();

    if (!text) {
      throw new Error("No response from Gemini");
    }

    return text;
  } catch (error: any) {
    if (error.code === 429 || error.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED");
    }
    throw error;
  }
}
