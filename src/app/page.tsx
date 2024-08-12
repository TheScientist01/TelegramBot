"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (lang) {
      router.push(lang);
    } else {
      localStorage.setItem("lang", "en");
      router.push("en");
    }
  }, []);

  return <></>;
}
