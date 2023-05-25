import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const apiKey = "MYlBc5fWEOEZOZAY9LpxRP4QKjT9QJ45";
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { apikey: apiKey },
      };

      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/latest?symbols=EGP%2CGBP%2CEUR%2C&base=USD",
        requestOptions
      );
      const result = await response.json();
      const rates = result.rates;
      const labels = [];
      const rateValues = [];

      for (const rate in rates) {
        if (rates.hasOwnProperty(rate)) {
          labels.push(rate);
          rateValues.push(rates[rate]);
        }
      }

      setData({
        labels: labels,
        datasets: [
          {
            label: "Latest Exchange Rates",
            data: rateValues,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "80%", height: "400px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
