/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { useAuth } from "@/contexts/authContext";
import { FormLabel, Input } from "@/components/forms";
import { Button } from "@/components/elements";

export default function Login() {
  const router = useRouter();
  const { login, isAuthenticated, isInitialized } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (isInitialized && !isAuthenticated) {
  //     router.replace("/admin/logint")
  //   }
  // }, [isAuthenticated, isInitialized, router])

  // if (!isInitialized || !isAuthenticated) {
  //   return null
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await login({ email, password });
      setIsLoading(false);
      toast.success("You are logged in!");
      router.replace("/admin/dashboard");
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Link href="/">
              <a className="flex justify-center -ml-8">
                <img
                  className="h-14 object-contain"
                  src="/asha-ivf.png"
                  alt="Logo Asha IVF"
                />
              </a>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
          </div>
          <form
            className="mt-8 space-y-6 accent-primary"
            onSubmit={handleSubmit}
          >
            <div>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <div className="mt-1">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <div className="mt-1">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-sm">
                <Link href="/forgot-password">
                  <a className="font-medium text-primary-600 hover:underline">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <Button className="w-full" type="submit" isLoading={isLoading}>
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
