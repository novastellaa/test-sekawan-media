import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  const fetchVehicleUsage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/vehicle-usage",
        {
          params: {
            startDate: "2023-01-01",
            endDate: "2023-12-31",
          },
        }
      );
      const data = response.data;

      const labels = data.map((item) => `Vehicle ${item.vehicleId}`);
      const usageCounts = data.map((item) => item.usageCount);

      setChartData({
        labels,
        datasets: [
          {
            label: "Vehicle Usage Count",
            data: usageCounts,
            backgroundColor: "rgba(75,192,192,0.6)",
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching vehicle usage data", error);
    }
  };

  useEffect(() => {
    fetchVehicleUsage();
  }, []);

  return (
    <div>
      <h2> Vehicle Usage Dashboard </h2> <Bar data={chartData} />{" "}
    </div>
  );
};

export default Dashboard;
