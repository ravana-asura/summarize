import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <SignUp
        afterSignInUrl="/"
        afterSignUpUrl="/"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-primary hover:bg-primary/90 text-primary-foreground",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
