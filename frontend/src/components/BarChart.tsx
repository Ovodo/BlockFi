"use client";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
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
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { fetchBarChartData } from "@/app/lib/slices/chartSlice";
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

const BarChart: React.FC = () => {
  const { barChartData, error, loading } = useAppSelector(
    (state) => state.charts
  );

  const opt = {
    plugins: { legend: { labels: { boxWidth: 20 } } },
    maintainAspectRatio: false,
    datasets: { bar: { barThickness: 70 } },
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (barChartData) {
    return (
      <div className='relative w-[400px] h-[250px]'>
        <Bar
          data={{
            labels: barChartData.labels,
            datasets: [
              {
                label: "Bar Dataset",
                data: barChartData.data,
                backgroundColor: "rgba(255, 99, 132, 1)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          // options={opt}
          options={opt}
        />
      </div>
    );
  }
};

export default BarChart;
