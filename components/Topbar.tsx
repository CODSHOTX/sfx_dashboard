"use client";

import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Search, Bell, Menu, X, ChevronDown, Settings, LogOut } from "lucide-react";

interface TopbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export default function Topbar({ sidebarOpen, setSidebarOpen }: TopbarProps) {
  const [isLive, setIsLive] = useState(true);
  const [language, setLanguage] = useState("English");
  const languages = ["English", "Turkish", "French"];
  const announcements = [
    {
      title: "System maintenance",
      body: "Scheduled for Sunday, 12:00 AM – 2:00 AM UTC.",
    },
    {
      title: "New feature rollout",
      body: "Dashboard alerts now support custom rules.",
    },
  ];

  return (
    <header
      className="
        fixed top-0 left-[214px] right-0 z-40
        flex h-[94px] items-center justify-between
        bg-white px-6
        transition-all duration-300
        max-lg:left-0 max-lg:w-full
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-3 px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden rounded-md p-2 hover:bg-gray-100"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Search Input (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 w-120">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center px-6 gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Switch checked={isLive} onCheckedChange={setIsLive} />
          <span className="text-xs font-medium text-gray-600">Live</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 w-29 h-10">
              {language}
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="w-40">
            <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
              {languages.map((lang) => (
                <DropdownMenuRadioItem key={lang} value={lang}>
                  {lang}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative flex items-center justify-center rounded-md bg-gray-100 p-2 transition w-10 h-10">
              <Bell
                size={20}
                className="text-[#828282]"
                fill="currentColor"
                stroke="none"
              />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-sm bg-[#E5A0FF] text-[10px] font-semibold text-white">
                {/* {announcements.length} */}
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            sideOffset={12}
            className="w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-800">Announcements</p>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-600">
                {announcements.length} new
              </span>
            </div>
            <div className="mt-3 space-y-3">
              {announcements.map((item) => (
                <div key={item.title} className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                  <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  <p className="mt-1 text-xs text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hidden sm:flex items-center gap-3 h-14 rounded-md bg-gray-50 px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer">
              <Avatar className="h-14 w-14 rounded-l-md rounded-r-none">
                <AvatarImage src="/images/download.jpeg" alt="Martins" className="rounded-l-md rounded-r-none" />
              </Avatar>
              <div className="text-sm leading-tight text-left">
                <p className="font-medium text-gray-800">Martins Chidume</p>
                <p className="text-xs text-gray-500">ID: 1234567</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 ml-auto" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            sideOffset={12}
            className="w-80 rounded-2xl border border-gray-200 bg-white p-0 shadow-lg"
          >
            {/* Profile Header */}
            <div className="px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 rounded-xl">
                  <AvatarImage src="/images/download.jpeg" alt="Martins" className="rounded-xl" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate">Martins Chidume</p>
                  <p className="text-sm text-gray-500 mt-0.5">ID: 1234567</p>
                  <p className="text-sm text-gray-600 mt-1 truncate">martins.chidume@example.com</p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="px-6 py-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Account Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Role</span>
                    <span className="text-sm font-medium text-gray-900">Administrator</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Department</span>
                    <span className="text-sm font-medium text-gray-900">Operations</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Member since</span>
                    <span className="text-sm font-medium text-gray-900">Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-100 px-2 py-2">
              <button className="w-full flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings size={16} className="text-gray-500" />
                Account Settings
              </button>
              <button className="w-full flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={16} className="text-red-500" />
                Sign Out
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
