"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import MessageList from "@/components/MessageList";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F4F5F7] font-sans antialiased">
      {/* Sidebar (fixed left, collapsible on mobile) */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Topbar (fixed top, starting after sidebar on desktop) */}
      <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <main
        className="
          absolute left-0 top-[94px] right-0 p-4 sm:p-6 lg:p-8
          overflow-y-auto bg-white rounded-tl-[12px] lg:rounded-tl-none lg:rounded-[12px]
          shadow-[0_1px_4px_rgba(0,0,0,0.08)]
          transition-all duration-300
          lg:left-[214px] lg:right-[324px]
          min-h-[calc(100vh-94px)]
          pb-24 lg:pb-8
        "
      >
        {children}
      </main>

      {/* Message List (fixed right, hidden on mobile - shown in page content instead) */}
      <div
        className={`
          hidden lg:block
          fixed right-0 top-[94px] z-30
          h-[calc(100vh-94px)]
        `}
      >
        <MessageList />
      </div>

    </div>
  );
}

