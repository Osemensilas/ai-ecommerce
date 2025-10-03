"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from "recharts";
import styles from '../app/css/dashboard.module.css';

const data = [
  { name: "Lagos 40%", value: 40 },
  { name: "Abuja 30%", value: 30 },
  { name: "Port Harcourt 20%", value: 20 },
  { name: "Kano 10%", value: 10 },
];

const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

export default function DashboardReportNut() {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%" 
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          {/* Center label */}
          <Label
                value="30 days"
                position="center"
                className={styles.centerText}
            />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
