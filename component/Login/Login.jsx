import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import "bootstrap-icons/font/bootstrap-icons.css";
import { BiEnvelope, BiLock, BiShow, BiHide } from "react-icons/bi";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Define navigate

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-[#f2b400] pt-14">
      {/* Título en el espacio naranja */}
      <h2 className="text-2xl font-bold text-white mb-8">Smartfrost</h2>

      {/* Contenido blanco */}
      <div className="w-full items-end bg-white shadow-lg rounded-t-4xl p-4 absolute bottom-0">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">
          {isLogin ? "Inicia sesión" : "Regístrate"}
        </h2>
        <div className="space-y-2 sm:space-y-3 sm:mb-3 h-32">
          <button className="w-full flex items-center justify-center px-2 py-1 rounded-md shadow">
            <i className="bi bi-google mr-2"></i>
            <span className="text-xs">Sign in with Google</span>
          </button>
          <button className="w-full flex items-center justify-center px-2 py-1 rounded-md shadow">
            <i className="bi bi-facebook mr-2 text-blue-600"></i>
            <span className="text-xs">Sign in with Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center px-2 py-1 rounded-md shadow">
            <i className="bi bi-apple mr-2"></i>
            <span className="text-xs">Sign in with Apple</span>
          </button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">O</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form>
          <div className="mb-3 sm:mb-4 relative">
            <BiEnvelope className="absolute left-3 mt-1 text-gray-400 text-xl" />
            <input
              type="text"
              id="email"
              className="pl-10 py-1 mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="Correo@ejemplo.com"
            />
          </div>
          <div className="mb-3 sm:mb-4 relative">
            <BiLock className="absolute left-3 mt-1 text-gray-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="pl-10 py-2 mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="Contraseña"
            />
            
          </div>
          <button
            type="submit"
            className="text-xs w-full bg-amarillo text-black py-2 px-4 rounded-md shadow hover:bg-gray-300 transition"
          >
            {isLogin ? "Iniciar sesión" : "Crear cuenta"}
          </button>
        </form>

        {isLogin && (
          <div className="mt-2 sm:mt-3 text-right">
            <a href="#" className="text-xs text-gray-500 hover:text-blue-500">
              ¿Forgot Password? 
            </a>
          </div>
        )}

        <div className="mt-2 sm:mt-4 text-center">
          <p className="text-gray-600 text-sm">
            {isLogin ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta?"}
            <button
              onClick={() => navigate("/signup")}
              className="text-yellow-500 bg-white text-sm"
            >
              {isLogin ? " Regístrate" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;