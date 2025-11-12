"use client";

import { Home, Users, CreditCard, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Transactions", icon: CreditCard },
    { name: "Customers", icon: Users },
    { name: "Payouts", icon: Home },
    { name: "Balances", icon: Home },
    { name: "Subscriptions", icon: Home },
    { name: "Payment plans", icon: Home },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">SFx</h1>
        <nav className="space-y-2">
          {links.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50"
            >
              <Icon size={18} /> {name}
            </Link>
          ))}
        </nav>
      </div>
      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600">
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}
