"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styles from '../app/css/dashboard.module.css';

const data = [
  { date: "22 Sep", price: 12000 },
  { date: "23 Sep", price: 18500 },
  { date: "24 Sep", price: 15000 },
  { date: "25 Sep", price: 21000 },
  { date: "26 Sep", price: 9000 },
  { date: "27 Sep", price: 17000 },
  { date: "28 Sep", price: 14000 },
  { date: "29 Sep", price: 25000 },
  { date: "30 Sep", price: 20000 },
];

export default function DashboardOrderSumLine() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `₦${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value) => [`₦${value.toLocaleString()}`, "Price"]}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#ff7300"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
