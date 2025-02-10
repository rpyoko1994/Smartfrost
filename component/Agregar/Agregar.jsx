import React, { useState } from "react";
import { Power, Plus, ChevronUp, ChevronDown, ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BiBell, BiMenu, BiChevronRight,  BiUser,
  BiWallet,
  BiTimeFive,
  BiHeart,
  BiCog,
  BiInfoCircle,
  BiPhone,
  BiQuestionMark,
  BiLogOut,
  BiHomeAlt,
  BiMap,
  BiFilter,
  BiPlusCircle, } from "react-icons/bi";
  import avatar from "../../Assets/avatar.avif";


const Agregar = () => {
  // Estados para controlar si los aires acondicionados están encendidos o apagados
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  // Estados para controlar las temperaturas
  const [temperature1, setTemperature1] = useState(20);
  const [temperature2, setTemperature2] = useState(20);
    // Menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para encender/apagar el aire 1
  const togglePower1 = () => {
    setIsOn1((prev) => !prev);
  };

  // Función para encender/apagar el aire 2
  const togglePower2 = () => {
    setIsOn2((prev) => !prev);
  };

  // Función para aumentar la temperatura del aire 1
  const increaseTemperature1 = () => {
    setTemperature1((prev) => prev + 1);
  };

  // Función para disminuir la temperatura del aire 1
  const decreaseTemperature1 = () => {
    setTemperature1((prev) => prev - 1);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para aumentar la temperatura del aire 2
  const increaseTemperature2 = () => {
    setTemperature2((prev) => prev + 1);
  };

  // Función para disminuir la temperatura del aire 2
  const decreaseTemperature2 = () => {
    setTemperature2((prev) => prev - 1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 bg-gray-700"

    >
      {/* Navbar con botón de atrás y menú */}
      <div className="w-full max-w-md  bg-opacity-90 p-4 rounded-t-lg flex justify-between">
        <button className="text-white hover:text-gray-200" 
        onClick={() => window.history.back()}
        >
          <ArrowLeft size={24} />
        </button>
        <button className="text-white hover:text-gray-200"  onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sección de equipos agregados */}
      <div className="text-white px-2 w-full max-w-md bg-opacity-90 flex justify-between items-center">
        <div className="text-xs text-white">Equipos agregados (1)</div>
        <div>
          <button className="text-white p-2 rounded-full hover:bg-gray-300 transition-colors">
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="w-full max-w-md p-4 rounded-b-lg">
        {/* Primera caja del aire acondicionado */}
        <div className="relative mb-6 py-6 h-40 rounded-3xl bg-azul">
          {/* Nombre del aire y botón de encendido/apagado */}
          <div className="items-center justify-center grid grid-rows-2">
            <div>
            <h2 className="text-xl font-bold text-gray-900">AC Daikin AP21890</h2>
            </div>
            <div className="items-center flex justify-center">
            <button
              onClick={togglePower1}
              className={`p-2 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isOn1 ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 hover:bg-gray-500"
              }`}
            >
              <Power size={22} className="text-white" />
            </button>
            </div>
          </div>

          {/* Control de temperatura (solo visible cuando está encendido) */}
          {isOn1 && (
            <div className="mt-4">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={decreaseTemperature1}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <ChevronDown size={20} />
                </button>
                <p className="text-3xl font-bold text-gray-800">{temperature1}°C</p>
                <button
                  onClick={increaseTemperature1}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Segunda caja del aire acondicionado */}
        <div className="relative mb-6 py-6 items-center justify-center flex h-28 rounded-3xl bg-blanquito">
          {/* Nombre del aire y botón de encendido/apagado */}
          <div className="items-center justify-center flex">
            <div className="items-center flex justify-center">
            <button className=" text-white p-2 rounded-full hover:text-blue-600 transition-colors">
            <Plus size={35} />
          </button>
            </div>
          </div>
         
        </div>
      </div>
       {/* Hamburger Menu Overlay */}
            {menuOpen && (
              <div className="fixed inset-0 bg-gray-50 bg-opacity-75 flex flex-col text-gray-600 z-50">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-600">
                  <div className="flex items-center gap-4">
                  <img src={avatar} alt="Ticket" className="w-14 h-12 object-cover flex"></img>
                    <span className="text-lg ">Nombre del Usuario</span>
                  </div>
                  <BiChevronRight className="text-2xl" onClick={toggleMenu} />
                </div>
      
                {/* Menu Options */}
                <div className="grid grid-cols-1 divide-y divide-gray-600">
                  {[
                    { icon: <BiWallet />, label: "Billing Management" },
                    { icon: <BiTimeFive />, label: "Activity" },
                    { icon: <BiHeart />, label: "Favorite" },
                    { icon: <BiCog />, label: "Settings" },
                    { icon: <BiInfoCircle />, label: "About Us" },
                    { icon: <BiPhone />, label: "Contact Us" },
                    { icon: <BiQuestionMark />, label: "FAQ" },
                    { icon: <BiLogOut />, label: "Log Out" },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-yellow-500 transition"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <BiChevronRight className="text-xl" />
                    </button>
                  ))}
                </div>
              </div>
            )}
    </div>
  );
};

export default Agregar;