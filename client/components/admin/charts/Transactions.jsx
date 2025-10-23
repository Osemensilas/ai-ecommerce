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
import styles from '../../../app/css/dashboard.module.css';

const data = [
  { month: "Jan", deposit: 4000, withdrawal: 2400 },
  { month: "Feb", deposit: 3000, withdrawal: 1398 },
  { month: "Mar", deposit: 5000, withdrawal: 2800 },
  { month: "Apr", deposit: 4780, withdrawal: 3908 },
  { month: "May", deposit: 5890, withdrawal: 4800 },
  { month: "Jun", deposit: 4390, withdrawal: 3800 },
  { month: "Jul", deposit: 6490, withdrawal: 4300 },
  { month: "Aug", deposit: 7200, withdrawal: 5100 },
  { month: "Sep", deposit: 8100, withdrawal: 6000 },
  { month: "Oct", deposit: 7300, withdrawal: 5200 },
  { month: "Nov", deposit: 6600, withdrawal: 4900 },
  { month: "Dec", deposit: 9000, withdrawal: 7000 },
];

export default function Transactions() {
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
            dataKey="deposit"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Deposit"
          />
          <Line
            type="monotone"
            dataKey="withdrawal"
            stroke="#F44336"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Withdrawal"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
