import React, { useState } from "react";
import { ChevronDown, ChevronUp, Fan, Clock, Droplet, RefreshCw } from "lucide-react";

const Control = () => {
  // Estados para manejar los valores dinámicos
  const [humidity, setHumidity] = useState(67);
  const [temperature, setTemperature] = useState(20);
  const [fanStatus, setFanStatus] = useState(true);
  const [timerStatus, setTimerStatus] = useState(true);
  const [airFlowDirection, setAirFlowDirection] = useState("Down");

  // Funciones para manejar cambios
  const handleHumidityChange = (e) => {
    const newHumidity = parseInt(e.target.value, 10);
    setHumidity(newHumidity);
  };

  const handleTemperatureChange = (e) => {
    const newTemperature = parseInt(e.target.value, 10);
    setTemperature(newTemperature);
  };

  const toggleFan = () => setFanStatus((prev) => !prev);
  const toggleTimer = () => setTimerStatus((prev) => !prev);

  const changeAirFlowDirection = () => {
    setAirFlowDirection((prev) => (prev === "Down" ? "Up" : "Down"));
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      {/* Contenedor del panel */}
      <div className="p-6 w-full absolute bottom-0">
        {/* Título del modelo */}
        <h2 className="text-white text-xl font-bold text-center mb-4">
          LG Standart Plus PC09SQ
        </h2>

        {/* Indicador de humedad (Barra de progreso horizontal con ícono) */}
        <div className="mb-4">
          <div className="flex items-center text-white">
            <Droplet size={20} className=" mr-2" />
            <div className="w-full bg-white rounded-full h-2.5 relative">
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: `${humidity}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={humidity}
                onChange={handleHumidityChange}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-white text-sm text-center mt-1">{humidity}% Humedad</p>
        </div>

        {/* Temperatura (Barra de progreso redonda con control deslizante) */}
        <div className="flex justify-center mb-4">
          <div className="relative w-40 h-40">
            <div className="absolute w-full h-full rounded-full border-4 border-gray-600"></div>
            <div
              className="absolute w-full h-full rounded-full border-4 border-yellow-500"
              style={{
                clipPath: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - temperature}%, transparent ${100 - temperature}%, transparent 100%)`,
              }}
            ></div>
            <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
              {temperature}°C
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={temperature}
              onChange={handleTemperatureChange}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Botones de Fan y Timer en la misma fila */}
        <div className="flex justify-between mb-4">
          {/* Botón de Fan */}
          <button
            onClick={toggleFan}
            className={`flex flex-col items-center p-4 rounded-lg transition-colors w-1/2 mr-2 ${
              fanStatus ? "bg-yellow-500" : "bg-gray-700"
            } hover:bg-yellow-300`}
          >
            <Fan size={24} className="text-white mb-2" />
            <span className="text-white text-sm">Fan</span>
          </button>

          {/* Botón de Timer */}
          <button
            onClick={toggleTimer}
            className={`flex flex-col items-center p-4 rounded-lg transition-colors w-1/2 ml-2 ${
              timerStatus ? "bg-yellow-500" : "bg-gray-600"
            } hover:bg-yellow-300`}
          >
            <Clock size={24} className="text-white mb-2" />
            <span className="text-white text-sm">Time</span>
          </button>
        </div>

        {/* Botones de dirección del flujo de aire */}
        <div className="bg-gray-600 p-4 rounded-lg">
          <div className="flex items-center justify-center gap-4">
            <div className="text-white text-medium">
                <h2> Air Flow:</h2>
            </div>
            <button
              onClick={() => changeAirFlowDirection("Up")}
              className={`bg-gray-700 p-2 rounded-lg hover:bg-yellow-500 transition-colors ${
                airFlowDirection === "Up" ? "bg-yellow-300" : ""
              }`}
            >
              <ChevronUp size={24} className="text-white" />
            </button>
            <p className="text-white text-lg">
              {airFlowDirection}
            </p>
            <button
              onClick={() => changeAirFlowDirection("Down")}
              className={`bg-gray-700 p-2 rounded-lg hover:bg-yellow-500 transition-colors ${
                airFlowDirection === "Down" ? "bg-yellow-500" : ""
              }`}
            >
              <ChevronDown size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;