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
import { fetchCandlestickData } from "@/app/lib/slices/chartSlice";
import "chartjs-adapter-date-fns";
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

const CandleStick: React.FC = () => {
  const { candlestickData, error, loading } = useAppSelector(
    (state) => state.charts
  );

  const candle = {
    id: "candle",
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
        scales: { x, y },
      } = chart;
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0,0,0,1)";

      data.datasets[0].data.forEach((datapoint: any, index: number) => {
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].h)
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].l)
        );
        ctx.stroke();
      });
    },
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (candlestickData) {
    return (
      <div className='w-[400px]  relative h-[250px]'>
        <Bar
          data={{
            datasets: [
              {
                label: "Candle Stick",
                data: candlestickData.data.map((x: any) => {
                  return {
                    x: x.x,
                    o: x.open,
                    h: x.high,
                    l: x.low,
                    c: x.close,
                    s: [x.open, x.close],
                  };
                }),
                // backgroundColor: "rgba(255, 99, 132, 1)",
                backgroundColor: (ctx: any) => {
                  console.log(ctx);
                  const {
                    raw: { o, c },
                  } = ctx;
                  let color: string;
                  if (o < c) {
                    color = "#136f63";
                  } else {
                    color = "#d00000";
                  }
                  return color;
                },
                borderColor: "rgba(0, 0, 0, .3)",
                borderWidth: 0.5,
                borderSkipped: false,
              },
            ],
          }}
          // options={opt}
          options={{
            parsing: { xAxisKey: "x", yAxisKey: "s" },
            plugins: { legend: { display: false } },
            maintainAspectRatio: false,
            scales: {
              x: { type: "timeseries", time: { unit: "day" } },
              y: { beginAtZero: true, grace: 1 },
            },
          }}
          plugins={[candle]}
        />
      </div>
    );
  }
};

export default CandleStick;
