import React, { useEffect, useState } from "react";
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

function LineChartt() {
  const [, setChartData] = useState([]);
  const [dataObj, setDataObj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "MYlBc5fWEOEZOZAY9LpxRP4QKjT9QJ45");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      const response = await fetch(
        "https://api.apilayer.com/exchangerates_data/timeseries?start_date=2023-04-20&end_date=2023-05-20&symbols=EUR&base=USD",
        requestOptions
      );
      const result = await response.json();

      var rates = result.rates;
      const chartData = [];
      const DateValue = [];

      for (var date in rates) {
        if (rates.hasOwnProperty(date)) {
          DateValue.push(date);
          const rate = rates[date].EUR;
          chartData.push(rate);
        }
      }
      function mergeArraysToObj(keys, values) {
        if (keys.length !== values.length) {
          throw new Error("Arrays must have the same length");
        }

        const mergedObj = {};

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = values[i];
          mergedObj[key] = value;
        }

        return mergedObj;
      }
      function transformArray(data) {
        const transformedData = [];

        for (const key in data) {
          transformedData.push({ name: key.toString(), value: data[key] });
        }

        return transformedData;
      }
      setDataObj(transformArray(mergeArraysToObj(DateValue, chartData)));

      setChartData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: "0 auto", width: "80%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataObj}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0.7, 1]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="rgb(75, 192, 192)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartt;
