import OpenAI from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "./prompt";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateSummaryfromOpenAi(pdfText: string) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SUMMARY_SYSTEM_PROMPT },
        { role: "user", content: pdfText },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No response content from OpenAI");
    }

    return content;
  } catch (error: any) {
    if (error.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED");
    }
    throw error;
  }
}
