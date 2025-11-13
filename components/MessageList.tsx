"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import React, { useState } from "react";
// Removed ChevronRight import as it's not in the new reference image

type Message = {
    id: string;
    name: string;
    text: string;
    fullText: string;
    time: string;
    unread?: boolean;
};

// Data updated to match the names and times in the image
const messages: Message[] = [
    {
        id: "1",
        name: "Peter Japhet",
        text: "I need some maintenac...",
        fullText:
            "I need some maintenance support in Block A. The air conditioning stopped working this morning and the residents are pretty uncomfortable. Can you send someone today?",
        time: "Jan 2, 12:31pm",
        unread: true,
    },
    {
        id: "2",
        name: "Leo Arome",
        text: "I got your email ad and ...",
        fullText:
            "I got your email and wanted to confirm that the contractor will arrive tomorrow by noon. Please let me know if there is any paperwork I should have prepared ahead of their visit.",
        time: "Wed, 06:00pm",
    },
    {
        id: "3",
        name: "James Robinson",
        text: "I need some maintenac...",
        fullText:
            "I need some maintenance on the gym equipment—several treadmills are giving error codes. Could the facilities team take a look before the weekend rush?",
        time: "Jan 2, 12:31pm",
    },
    {
        id: "4",
        name: "Lupita Jonah",
        text: "Thank you so much for ...",
        fullText:
            "Thank you so much for resolving the parking access issue! The residents were able to get in without any delays this morning. Keep me posted if the sensor needs a replacement soon.",
        time: "Feb 13, 06:15pm",
    }, // Adjusted text
];

// Avatar palette to match the image colors more closely
const avatarPalette = [
    "#F1916D", // Orange/Coral for Peter Japhet (P)
    "#F1916D", // Orange/Coral for Leo Arome (L)
    "#52C7C2", // Blue/Teal for James Robinson (J)
    "#00BBF9", // Bright Blue for Lupita Jonah (L)
    // Other colors for fallback/placeholders
    "#9B5DE5", 
    "#F15BB5",
    "#00F5D4",
    "#FEE440", 
];

function getAvatarColor(key: string) {
    const hash = key
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return avatarPalette[hash % avatarPalette.length];
}

function Avatar({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 1) // Only take the first letter of the first name
        .join("")
        .toUpperCase();
    const background = getAvatarColor(name);

    return (
        <div
            className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-semibold text-white" 
            style={{ backgroundColor: background }}
        >
            {initials}
        </div>
    );
}

export default function MessageList() {
    const [activeTab, setActiveTab] = useState<"Stats" | "Messages">("Messages");
    const [expandedMessage, setExpandedMessage] = useState<string | null>(null);

    const toggleMessage = (id: string) => {
        setExpandedMessage((prev) => (prev === id ? null : id));
    };

    return (
        // Adjusted padding to create the necessary space on the right side
        // Fixed positioning on large screens, static on small screens
        <aside className="lg:fixed lg:right-0 lg:z-30 lg:h-[calc(100vh-94px)] lg:w-[324px] flex flex-col lg:rounded-tl-[75px] rounded-xl bg-[#F9F9F9] p-5 overflow-y-auto w-full">

            {/* Tabs - Styled to match the image: dark text for active, light for inactive, no underline/border-b */}
            <div className="mb-4 flex gap-20 justify-center border-b border-[#E0E0E0]  pb-4"> 
                <button
                    onClick={() => setActiveTab("Stats")}
                    className={`text-xl font-bold transition ${ // Increased font size for tabs
                        activeTab === "Stats" ? "text-gray-400 hover:text-gray-600" : "text-gray-400"
                    }`}
                >
                    Stats
                </button>
                <button
                    onClick={() => setActiveTab("Messages")}
                    className={`text-xl font-bold transition ${
                        activeTab === "Messages" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                    Messages
                </button>
            </div>

            {activeTab === "Messages" && (
                <div className="flex-1 space-y-3 w-full overflow-y-auto">
                    {messages.map((m) => {
                        const isExpanded = expandedMessage === m.id;
                        return (
        <div
            key={m.id}
            // Outer card structure: flex-col stacks the content vertically.
            // Reduced padding and shadow to match the isolated card image.
            className="flex flex-col gap-2 cursor-pointer rounded-xl bg-white p-4 shadow-lg" 
            role="button"
            tabIndex={0}
        >

            {/* --- TOP ROW: Avatar and Time (Flex for side-by-side and justify-between) --- */}
            <div className="flex w-full justify-between items-start">
                {/* 1. Avatar (Top Left) */}
                <Avatar name={m.name} />
                
                {/* 2. Time (Top Right) */}
                <span className="whitespace-nowrap text-sm text-gray-400">
                    {m.time}
                </span>
            </div>
            
            {/* --- BOTTOM ROW: Name, Message, and Chevron (Grid to control alignment) --- */}
            {/* Using grid with two columns: one auto for content, one fixed for the chevron */}
            <div className="grid grid-cols-[1fr_auto] items-center gap-2 mt-1 pl-1"> 
                
                {/* Name and Message Stack (Left Column) */}
                <div className="flex flex-col min-w-0">
                    {/* 3. Name (Bold) */}
                    <p className="truncate text-base font-bold text-gray-900 leading-tight">
                        {m.name}
                    </p>
                    {/* 4. Message (Light/Gray) */}
                    <p
                        className={`text-sm text-gray-500 leading-tight ${
                            isExpanded ? "" : "truncate"
                        }`}
                    >
                        {isExpanded ? m.fullText : m.text}
                    </p>
                </div>

                {/* Chevron (Right Column, vertically centered with text) */}
                <div className="flex-shrink-0">
                    <button
                        type="button"
                        onClick={() => toggleMessage(m.id)}
                        className="flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                        aria-expanded={isExpanded}
                        aria-controls={`message-${m.id}`}
                    >
                        {isExpanded ? (
                            <ChevronUp size={18} className="text-gray-500" />
                        ) : (
                            <ChevronRight size={18} className="text-gray-400" />
                        )}
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div
                    id={`message-${m.id}`}
                    className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600"
                >
                    {m.fullText}
                </div>
            )}
        </div>
                        );
                    })}
                    {/* Placeholder for the last card in the image */}
                    {/* <div
                        className="flex cursor-pointer gap-4 rounded-xl bg-white px-4 py-5 shadow-lg items-start" 
                        role="button"
                        tabIndex={0}
                    >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-semibold text-white" style={{ backgroundColor: avatarPalette[3] }}>
                            L
                        </div>
                        <div className="flex-1 min-w-0 grid grid-cols-[1fr_auto]">
                            <div className="flex flex-col justify-center">
                                <p className="truncate text-base font-semibold text-gray-900 leading-tight">
                                    [Next User]
                                </p>
                                <p className="truncate text-sm text-gray-500 leading-tight">
                                    ...
                                </p>
                            </div>
                            <div className="text-right pl-4">
                                <span className="whitespace-nowrap text-sm text-gray-400">
                                    [Time]
                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            )}

            {activeTab === "Stats" && (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                    Stats content coming soon
                </div>
            )}
        </aside>
    );
}