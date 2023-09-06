/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Spinner } from "evergreen-ui";
import { LogoLgIcon } from "../assets/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="fixed left-0 bg-mailreef_gray-11 right-0 top-0 z-20 bottom-0">
      <div className="flex text-center flex-col justify-center pt-10 md:pt-36">
        <div className="pb-5 flex flex-col items-center">
          <LogoLgIcon />
        </div>
        <p className="text-base font-medium pt-2 pb-4">Loading...</p>
        <div className="flex justify-center">
          <Spinner size={24} />
        </div>
      </div>
    </div>
  );
}
