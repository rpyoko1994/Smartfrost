import React, { useState } from "react";
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
import mujer from "../../Assets/mujer.png";
import image2 from "../../Assets/imagen2.png";
import image7 from "../../Assets/image7.svg";
import image8 from "../../Assets/image8.svg";
import image9 from "../../Assets/image9.svg";
import image10 from "../../Assets/image10.svg";
import image11 from "../../Assets/image11.svg";
import image12 from "../../Assets/image12.svg";
import avatar from "../../Assets/avatar.avif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "Tu pedido ha sido enviado.",
    "Nueva oferta disponible en la tienda.",
    "Tu contraseña fue cambiada exitosamente.",
    "Tu Cuenta ha sido activada",
    "Bienvenido de nuevo",
    "Bienvenido",
  ]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const removeNotification = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="min-h-screen bg-cover bg-center">
      {/* Navbar */}
      <div className="flex justify-between border-b items-center px-4 py-2 border-gray-200 bg-opacity-50">
        <button  onClick={toggleMenu} >
        <BiMenu className="text-2xl text-yellow-500 cursor-pointer" />
        </button>
        <h1 className=" text-lg font-medium">Inicio</h1>

        <button onClick={toggleNotifications}>
        <BiBell className="text-2xl text-yellow-500 cursor-pointer" />
        </button>
      </div>

      <div class="grid grid-cols-12 py-6 px-4">
  <div class="col-span-3 bg-gray-600 rounded-lg">
    <img src={image2} alt="Ticket" class="w-14 h-6 ml-4 mr-2 my-2 px-2 object-cover flex"></img>
    <h2 class="text-center text-white">20% <br /> Off</h2>
  </div>

  <div className="col-span-9 bg-gray-200 rounded-lg py-2 px-4">
    <h2 className="text-xs font-medium">Join us today get 20% off you yearly subcribtion</h2>
    <div className="flex justify-between"> 
      <button className="bg-amarillo text-xs hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-4">
        Activar ahora
      </button>
      <img 
        src={mujer} 
        alt="Paisaje" 
        class="ml-2 object-cover w-14 h-12" 
      ></img>
    </div>
  </div>
</div>

      {/* Icon Grid Section */}
      <div className="absolute bottom-0 w-full p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <button className="flex flex-col items-center p-3 bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image7} alt="Ticket" className="w-14 h-14 object-cover flex"></img>
            <span className="text-sm mt-2">Calendario</span>
          </button>
          <button className="flex flex-col items-center p-3  bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image8} alt="Ticket" className="w-14 h-14 object-cover flex"></img>
            <span className="text-sm mt-2">Equipo</span>
          </button>
          <button className="flex flex-col items-center p-3  bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image9} alt="Ticket" className="w-14 h-14 object-cover flex"></img>
            <span className="text-sm mt-2">Equipos</span>
          </button>
          <button className="flex flex-col items-center p-3  bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image10} alt="Ticket" className="w-14 h-14 object-cover flex"></img>
            <span className="text-sm mt-2">Pagos</span>
          </button>
          <button className="flex flex-col items-center p-3  bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image11} alt="Ticket" className="w-14 h-14 object-cover flex"></img>
            <span className="text-sm mt-2">Mantenimiento</span>
          </button>
          <button className="flex flex-col items-center p-3  bg-white rounded-lg shadow hover:bg-yellow-500 transition">
          <img src={image12} alt="Ticket" className="w-14 h-12 object-cover flex"></img>
            <span className="text-sm mt-2">Soporte</span>
          </button>
        </div>
      </div>

       
       {/* Notifications Page */}
      {notificationsOpen && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-75 flex flex-col text-gray-600 z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h2 className="text-xl">Notificaciones</h2>
            <div className="flex items-center">
              <BiFilter className="text-2xl cursor-pointer mr-2" onClick={toggleNotifications} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-600"
                >
                  {/* Avatar */}
                  <img
                    src={`https://i.pravatar.cc/50?img=${index + 1}`}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  {/* Notification Text */}
                  <span className="flex-1">{notification}</span>
                  {/* Delete Button */}
                  <button
                    onClick={() => removeNotification(index)}
                  >
                    <h2 className="text-red-500 hover:text-red-600 font-bold">X</h2>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center mt-4">No tienes notificaciones.</p>
            )}
          </div>
          
          {/* Bottom Navigation */}
          <div className="flex justify-around items-center bg-gray-50 text-gray-600 p-4">
            <button className="text-3xl  cursor-pointer">
            <BiHomeAlt className="text-3xl  cursor-pointer" />
            </button>
            <button className="text-3xl  cursor-pointer">
            <BiMap className="text-3xl  cursor-pointer" />
            </button>
            <button className="text-3xl cursor-pointer">
            <BiPlusCircle className="text-3xl  cursor-pointer" />
            </button>
            <button className="text-3xl text-yellow-500 cursor-pointer">
            <BiBell className="text-3xl text-yellow-500 cursor-pointer" />
            </button>
            <button className="text-3xl  cursor-pointer">
            <BiUser className="text-3xl  cursor-pointer" />
            </button>
          </div>
        </div>
      )}

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

export default Home;
