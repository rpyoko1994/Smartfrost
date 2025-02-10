import React, { useState } from "react";
import {
  BiGroup,
  BiHomeAlt,
  BiCar,
  BiBuilding,
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiCalendar,
  BiChevronLeft,
} from "react-icons/bi";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { useNavigate } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Graficas = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const [selectedMonth, setSelectedMonth] = useState("JAN");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [10000, 20000, 15000, 25000, 30000, 40000, 35000],
        backgroundColor: "#2a8849",
      },
      {
        label: "Expense",
        data: [8000, 15000, 10000, 20000, 25000, 30000, 20000],
        backgroundColor: "#d10a10",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white p-4">
        <div className="flex border-b items-center py-2 border-gray-200 bg-opacity-50">
                <button  onClick={handleGoBack} >
                <BiChevronLeft className="text-2xl text-yellow-500 cursor-pointer" />
                </button>
                <h1 className=" text-lg font-medium items-center ml-4">Dashboard</h1>
        
              </div>
      

      {/* Society Summary */}
      <div className="mt-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Society Summary</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">{selectedMonth}</span>
            <BiCalendar className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
            <BiGroup className="text-xl text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Total Members</p>
              <p className="text-sm font-bold">878</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
            <BiHomeAlt className="text-xl text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Total Houses</p>
              <p className="text-sm font-bold">345</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
            <BiBuilding className="text-xl text-yellow-500" />
            <div>
              <p className="text-xs text-gray-500">Total Wings</p>
              <p className="text-sm font-bold">512</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
            <BiCar className="text-xl text-red-500" />
            <div>
              <p className="text-xs text-gray-500">Total Vehicles</p>
              <p className="text-sm font-bold">2185</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="mt-3">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold">Financial Summary</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">{selectedMonth}</span>
            <BiCalendar className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-xs text-gray-500">Total Bill Amount</p>
            <p className="text-sm font-bold">₹45,016</p>
            <p className="text-green-700 text-xs flex items-center gap-1">
              <BiUpArrowAlt /> 10% Increased
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-xs text-gray-500">Special Bill Amount</p>
            <p className="text-sm font-bold">₹2,567</p>
            <p className="text-green-700 text-xs flex items-center gap-1">
              <BiUpArrowAlt /> 5% Increased
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-xs text-gray-500">Pending Bill Amount</p>
            <p className="text-sm font-bold">₹45,016</p>
            <p className="text-red-700 text-xs flex items-center gap-1">
              <BiDownArrowAlt /> 34% Decreased
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-xs text-gray-500">Payment Received</p>
            <p className="text-sm font-bold">₹46,016</p>
            <p className="text-green-700 text-xs flex items-center gap-1">
              <BiUpArrowAlt /> 20% Increased
            </p>
          </div>
        </div>
      </div>

      {/* Net Balance Chart */}
      <div className="bg-white p-2 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Net Balance</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">2025</span>
            <BiCalendar className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graficas;
