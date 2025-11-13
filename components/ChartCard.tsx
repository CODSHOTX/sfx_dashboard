"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mar 1-7", uv: 50000 }, // Adjusted value to better match the bar height in the image
  { name: "Mar 8-14", uv: 120000 },
  { name: "Mar 15-21", uv: 120000 },
  { name: "Mar 22-28", uv: 125000 },
  { name: "Final wk", uv: 190000 },
];

export default function ChartCard() {
  return (
    <section className="rounded-[24px] bg-white p-6 border border-[#F2F2F2]">
      <div className="mb-4 flex items-center justify-start"> {/* Align filter left */}
        <div className="flex items-center gap-2"> 
            {/* The filter button structure is kept for context, 
                but I've simplified the look to match the image's dropdown */}
            <span className="text-sm">Last 30 days</span>
            <span className="text-xl bg-[#FAF2FF] text-[#BB6BD9] rounded-sm p-1 px-2">▾</span>
        </div>
      </div>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={36} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}> {/* Increased barSize */}
            
            {/* 1. CARTESIAN GRID: Set vertical=false for horizontal lines only, and a very light stroke. */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            
            {/* 2. X-AXIS: Remove the axis line and tick line, and use a dark grey stroke for the labels. */}
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF" 
              tickLine={false} 
              axisLine={false} 
              interval={0} 
              style={{ fontSize: '10px' }} // Adjusted font size to fit labels
            />
            
            {/* 3. Y-AXIS: Remove the axis line and tick line, format ticks for the thousands separator (matching the image) */}
            <YAxis 
              stroke="#9CA3AF" 
              axisLine={false} 
              tickLine={false}
              domain={[0, 200000]}
              ticks={[0, 50000, 100000, 150000, 200000]}
              tickFormatter={(value) => value.toLocaleString()} // Formats numbers with commas (e.g., 50,000)
              style={{ fontSize: '10px' }}
            />
            
            {/* Tooltip is optional but useful */}
            <Tooltip 
                cursor={{ fill: 'rgba(200, 200, 200, 0.2)' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            />
            
            {/* 4. BAR: Set a slightly lighter purple fill color and use the radius prop for rounded corners. */}
            <Bar 
              dataKey="uv" 
              fill="#D5B0FF" /* Light purple color matching the image */
              radius={[12, 12, 0, 0]} /* Rounded top corners */
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}