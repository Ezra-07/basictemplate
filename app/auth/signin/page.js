"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthSignIn = async (provider) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">
              go back to the homepage
            </Link>
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <button
              onClick={() => handleOAuthSignIn("google")}
              disabled={isLoading}
              className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
            
            <button
              onClick={() => handleOAuthSignIn("github")}
              disabled={isLoading}
              className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FaGithub className="mr-2" />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 