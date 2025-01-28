import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BiEnvelope, BiLock, BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-[#f2b400] pt-14">
      {/* Título en el espacio naranja */}
      <h2 className="text-2xl font-bold text-white mb-8">Smartfrost</h2>

      {/* Contenido blanco */}
      <div className="w-full items-end bg-white shadow-lg rounded-t-4xl p-4">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">
          {isLogin ? "Inicia sesión" : "Regístrate"}
        </h2>
        <div className="space-y-2 sm:space-y-3 mb-2 sm:mb-3 h-32">
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

        <div className="relative flex items-center pt-3">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">O</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form>
          <div className="mb-3 sm:mb-4 relative">
            <BiEnvelope className="absolute left-3 mb-2 text-gray-400 text-xl" />
            <input
              type="text"
              id="email"
              className="pl-10 mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="mb-3 sm:mb-4 relative">
            <BiLock className="absolute left-3 mb-2 text-gray-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="pl-10 pr-10 mb-2 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="Contraseña"
            />
            
          </div>
          <button
            type="submit"
            className="text-xs w-full bg-blue-600 text-black py-1 px-4 rounded-md shadow hover:bg-blue-700 transition"
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
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-500 bg-white text-sm"
            >
              {isLogin ? "Regístrate" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;