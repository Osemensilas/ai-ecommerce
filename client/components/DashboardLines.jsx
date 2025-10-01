"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from '../app/css/dashboard.module.css';

const data = [
  { month: "Jan", income: 4000, expenditure: 2400 },
  { month: "Feb", income: 3000, expenditure: 1398 },
  { month: "Mar", income: 5000, expenditure: 2800 },
  { month: "Apr", income: 4780, expenditure: 3908 },
  { month: "May", income: 5890, expenditure: 4800 },
  { month: "Jun", income: 4390, expenditure: 3800 },
  { month: "Jul", income: 6490, expenditure: 4300 },
  { month: "Aug", income: 7200, expenditure: 5100 },
  { month: "Sep", income: 8100, expenditure: 6000 },
  { month: "Oct", income: 7300, expenditure: 5200 },
  { month: "Nov", income: 6600, expenditure: 4900 },
  { month: "Dec", income: 9000, expenditure: 7000 },
];

export default function DashboardLines() {
  return (
    <div className={styles.lineChartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expenditure"
            stroke="#F44336"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Expenditure"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
