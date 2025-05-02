"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState("hunting");

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  const router = useRouter();

  const goToHome = () => {
    handleTab("hunting");
    router.push("/");
  };
  const goToBuyer = () => {
    handleTab("buyer");
    router.push("/buyer");
  };

  return (
    <nav className='fixed bottom-0 left-0 w-full mx-auto bg-[#232323] border-t border-[#333] flex z-50'>
      <button
        className={`flex-1 py-3 flex flex-col items-center justify-center transition ${
          activeTab === "hunting" ? "text-yellow-300" : "text-gray-300"
        }`}
        onClick={goToHome}
      >
        <span className='text-lg'>⚔️</span>
        <span className='text-xs font-semibold mt-1'>사냥터</span>
      </button>
      <button
        className={`flex-1 py-3 flex flex-col items-center justify-center transition ${
          activeTab === "buyer" ? "text-yellow-300" : "text-gray-300"
        }`}
        onClick={goToBuyer}
      >
        <span className='text-lg'>🛒</span>
        <span className='text-xs font-semibold mt-1'>구매자</span>
      </button>
    </nav>
  );
}
