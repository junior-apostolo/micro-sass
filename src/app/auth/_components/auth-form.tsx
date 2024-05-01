"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const { register, handleSubmit } = useForm();

  const formSubmit = handleSubmit(async (data) => {
    try {
      await signIn("email", { email: data.email, redirect: false });

      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error occurred. Please try again.",
      });
    }
  });

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Sign in with Magic Link
          </CardTitle>
          <CardDescription>
            Enter your email below to receive a magic link to sign in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formSubmit} className="space-y-4">
            <div>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                {...register("email")}
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <Button variant={'default'} className="w-full" type="submit">
              Send Magic Link
            </Button>
          </form>
          {/* <div className="mt-4 text-center text-sm">
            Or sign in with
            <Link className="font-medium underline" href="#">
              Google
            </Link>
            {" \n "}or
            <Link className="font-medium underline" href="#">
              GitHub
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
