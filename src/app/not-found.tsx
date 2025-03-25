"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-[50dvh] flex font-semibold flex-col items-center justify-center">
      <h1>Page Not Found</h1>
    </div>
  );
}
