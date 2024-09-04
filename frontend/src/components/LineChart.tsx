"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler,
  TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { fetchLineChartData } from "@/app/lib/slices/chartSlice";
import Loading from "./Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler,
  TimeSeriesScale
);

const LineChart: React.FC = () => {
  const { lineChartData, error, loading } = useAppSelector(
    (state) => state.charts
  );

  const opt = {
    plugins: { legend: { labels: { boxWidth: 20 } } },
    maintainAspectRatio: false,
    datasets: { bar: { barThickness: 70 } },
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  if (lineChartData) {
    return (
      <div className='w-[400px]  h-[250px]'>
        <Line
          data={{
            labels: lineChartData.labels,
            datasets: [
              {
                label: "Line Dataset",
                data: lineChartData.data,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
              },
            ],
          }}
          options={opt}
        />
      </div>
    );
  }
};

export default LineChart;
