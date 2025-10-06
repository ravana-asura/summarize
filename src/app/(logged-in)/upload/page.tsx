import { Sparkle, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import UploadForm from "@/components/(upload)/uploadForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-lg w-full p-8 bg-white border border-gray-200 rounded-2xl shadow-lg space-y-6">
        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full shadow-lg">
          <Sparkle className="h-3 w-3 mr-1" />
          <p>AI Powered Content Creation</p>
        </Badge>
        
        <h1 className="text-3xl font-bold text-center">Start Uploading Your PDF's</h1>
        <p className="text-center">Upload your pdf and let our ai do the magic!</p>
        <Sparkles className="w-6 h-6 text-primary mx-auto animate-spin-slow" />
        <Separator />
        <p className="text-center">Upload PDF</p>

        <UploadForm />
      </div>
    </div>
  );
}
