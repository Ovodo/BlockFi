"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
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
import { fetchPieChartData } from "@/app/lib/slices/chartSlice";
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

const PieChart: React.FC = () => {
  const { pieChartData, error, loading } = useAppSelector(
    (state) => state.charts
  );

  const opt = {
    maintainAspectRatio: false,
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (pieChartData) {
    return (
      <div className=' w-[400px] relative h-[250px]'>
        <Pie
          className='w-full'
          options={opt}
          style={{ margin: "auto" }}
          data={{
            labels: pieChartData.labels,
            datasets: [
              {
                label: "Pie Data",
                data: pieChartData.data,
                backgroundColor: [
                  "rgba(255, 0, 0,1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 206, 0,1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    );
  }
};

export default PieChart;
