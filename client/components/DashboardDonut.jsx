"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styles from '../app/css/dashboard.module.css';

const data = [
  { name: "Active", value: 78 },
  { name: "Inactive", value: 22 },
];

const COLORS = ["#FFA500", "#E0E0E0"];

export default function DashboardDonut() {
  return (
    <div className={styles.donutContainer}>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart className={styles.firstChart} >
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        <div className={styles.donutLabel2}>78%</div>
    </div>
  );
}
