"use client";

import { useState } from "react";
import {
  Home, Users, ArrowLeftRight, Settings, LogOut, Layers, BarChart4, ChevronDown,
  Handshake,
  CreditCard,
  NotebookPen,
  Eye,
  Waypoints,
  CheckCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const groups = [
    {
      title: "Payments",
      items: [
        { name: "Transactions", icon: ArrowLeftRight },
        { name: "Customers", icon: Users },
        { name: "Payouts", icon: CreditCard },
        { name: "Balances", icon: Handshake },
        { name: "Subscriptions", icon: CheckCheck },
        { name: "Payment plans", icon: NotebookPen },
      ],
    },
    {
      title: "Commerce",
      items: [
        { name: "Referrals", icon: Waypoints },
        { name: "Audit logs", icon: Eye },
        { name: "Settings", icon: Settings },
      ],
    },
  ];

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Payments: true,
    Commerce: false,
  });

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[280px] lg:w-[214px]
          bg-white lg:bg-gray-100
          shadow-[0_4px_20px_rgba(0,0,0,0.15)] lg:shadow-[0_1px_3px_rgba(0,0,0,0.05)]
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-1 flex-col overflow-y-auto px-5 pt-6 pb-4">
          {/* Mobile header with close button */}
          <div className="mb-8 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/sfx_logo.png"
                alt="SFx Logo"
                width={80}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close sidebar"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          <nav className="grid gap-4 text-sm text-gray-500">
            {groups.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                {title === "Commerce" ? (
                  <div className="border-t border-b border-gray-200 pt-4 pb-4">
                    <button
                      type="button"
                      onClick={() => toggleGroup(title)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 transition hover:bg-gray-50 lg:hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <span>{title}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openGroups[title] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleGroup(title)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 transition hover:bg-gray-50 lg:hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <span>{title}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openGroups[title] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
                <div
                  className={`grid origin-top grid-cols-1 gap-1.5 transition-all duration-200 ease-out ${
                    openGroups[title]
                      ? "max-h-[400px] opacity-100"
                      : "pointer-events-none max-h-0 opacity-0"
                  }`}
                >
                  {items.map(({ name, icon: Icon }) => (
                    <Link
                      key={name}
                      href="#"
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition text-gray-600 hover:bg-gray-50 hover:text-indigo-600 lg:hover:bg-indigo-50"
                    >
                      <Icon size={18} className="flex-shrink-0" /> 
                      <span className="truncate">{name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

      </aside>
    </>
  );
}
