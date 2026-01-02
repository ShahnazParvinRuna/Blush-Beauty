"use client";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <button
        onClick={() => router.push("/")}
        className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Go to Website
      </button>
    </header>
  );
}
