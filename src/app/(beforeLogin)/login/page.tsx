"use client";

import HomePage from "@/app/_components/Home/HomePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);
  return <HomePage />;
}
