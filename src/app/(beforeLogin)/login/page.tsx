"use client";
import HomePage from "@/app/_components/Home/HomePage";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <HomePage />;
}
