"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

const issueData = [
  { name: "a", value: 1, fill: "#FFBB4F", label: "Customer errors" },
  { name: "x", value: 5, fill: "#FFDA93", label: "Fraud blocks" },
  { name: "o", value: 3, fill: "#FF7576", label: "Bank errors" },
  { name: "n", value: 10, fill: "#80E0E5", label: "System errors" },
];

const totalErrors = issueData.reduce((sum, item) => sum + item.value, 0);

export function PaymentIssuesCard() {
  return (
    <div className="w-full rounded-[24px] bg-white p-6 border border-[#F2F2F2]">
      <h3 className="text-lg font-semibold text-gray-900">Payment issues</h3>
      
      <div className="mt-6 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={issueData} barSize={60}>
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 13, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={false}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {issueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="value" 
                position="top" 
                style={{ 
                  fontSize: '14px', 
                  fontWeight: '600',
                  fill: '#374151'
                }} 
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#FFA14E]">
          Total number of errors: <span className="font-bold text-[#FFA14E]">{totalErrors}</span>
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {issueData.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div 
              className="h-6 w-6 flex-shrink-0 rounded-md"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}