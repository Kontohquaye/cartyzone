"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginErrors = Partial<Record<"email" | "password", string>>;

export default function LoginPage() {
  const [remember, setRemember] = useState(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setFormError(null);

    const formData = new FormData(e.currentTarget);

    const rawData = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    const parsed = loginSchema.safeParse(rawData);

    if (!parsed.success) {
      const fieldErrors: LoginErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as "email" | "password";
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setPending(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        remember,
      }),
    });

    setPending(false);

    const serverResponse = await res.json();
    if (serverResponse.error) {
      setFormError(serverResponse.message || "Login failed");
      return;
    }
    return router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome Back 👋
        </h1>

        {formError && (
          <p className="text-center text-red-600 mb-2">{formError}</p>
        )}

        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to your Cartyzone account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-green-500"
              />
              Remember me
            </label>

            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-green-600 py-3 text-white font-medium hover:bg-green-700 transition disabled:opacity-60"
          >
            {pending ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
