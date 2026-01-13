"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      setError(result.message);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8E8DF] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-serif text-center mb-6">Create Account</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full mb-4 border p-3 rounded"
          required
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full mb-4 border p-3 rounded"
          required
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full mb-6 border p-3 rounded"
          required
        />

        <button className="w-full bg-black text-white py-3 rounded hover:opacity-90">
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#b08a71] underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
