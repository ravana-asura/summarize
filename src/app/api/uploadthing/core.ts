import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileSize: "32MB" }
  })
    .middleware(async () => {
      try {
        const user = await currentUser();
        console.log("Middleware - User:", user ? "Logged in" : "Not logged in");
        
        if (!user) {
          console.log("No user found, allowing anonymous upload for testing");
          return { userId: "anonymous" };
        }
        
        return { userId: user.id };
      } catch (error) {
        console.error("Middleware error:", error);
        throw new UploadThingError("Authentication failed");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed for user id", metadata?.userId);
      return { 
        userId: metadata?.userId, 
        fileUrl: file.ufsUrl,
        fileName: file.name,
        fileSize: file.size,
        fileKey: file.key
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;