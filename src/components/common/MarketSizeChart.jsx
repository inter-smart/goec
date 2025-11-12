"use client";
import { color } from "framer-motion";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function MarketSizeChart({ bottomColor, topColor, categories, series, data=[] }) {
  const [state, setState] = useState({
    series: [
      {
        name: "Market Size",
        data: data?.series || [19.51, 20.56, 33.49, 43.88, 57.48, 75.31, 98.67, 129.27, 169.37, 221.9],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 400,
        toolbar: { show: false },
        background: "transparent",
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: "75%",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `$${val}`,
        offsetY: -25,
        style: {
          fontSize: "12px",
          fontWeight: 400,
          colors: ["#fff"],
        },
      },

      xaxis: {
        categories: data?.categories || ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"],
        position: "bottom",
        offsetY: -5,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#fff",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false, // hidden as in reference
      },
      grid: {
        show: false, // no gridlines
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: [topColor || "#2CC59C"], // top color
          colors: [bottomColor || "#30FFC2"], // bottom color
          stops: [0, 100],
        },
      },
      colors: [bottomColor || "#30FFC2"], // base (required by Apex)
      tooltip: {
        enabled: false, // 🔴 hide hover tooltip
      },
      legend: { show: false },
      title: {
        text: "", // 🔴 hide chart title
      },
    },
  });

  return <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />;
}
