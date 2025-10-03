"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "../app/css/dashboard.module.css";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 4890 },
  { month: "Jun", sales: 6390 },
  { month: "Jul", sales: 5490 },
  { month: "Aug", sales: 7300 },
  { month: "Sep", sales: 6000 },
  { month: "Oct", sales: 7100 },
  { month: "Nov", sales: 8200 },
  { month: "Dec", sales: 9100 },
];

export default function MonthlySalesChart() {
  return (
    <div className={styles.monthlyChartWrapper}>
      <ResponsiveContainer width="100%" height={210}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <XAxis dataKey="month" tick={{ fontSize: 9 }} />
          <YAxis tick={{ fontSize: 9 }} />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: "10px",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="sales" fill="#0088FE" name="Online Sales" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
