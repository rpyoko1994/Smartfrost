import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // Estados para manejar los valores de los inputs y errores
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validación del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Si todo es válido, continuar (ejemplo: navegar o enviar datos al servidor)
    setError("");
    alert("Cuenta creada con éxito!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center bg-amarillo p-4 sm:p-6">
        <h2 className="text-2xl font-bold text-white mb-8">Smartfrost</h2>
      <div className="w-full max-w-sm sm:max-w-md bg-white shadow-lg rounded-t-4xl p-4 sm:p-6 absolute bottom-0">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          Regístrate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Input de Teléfono */}
          <div className="relative">
            <i className="bi bi-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Input de Correo */}
          <div className="relative">
            <i className="bi bi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Input de Nombre */}
          <div className="relative">
            <i className="bi bi-people absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Input de Contraseña */}
          <div className="relative">
            <i className="bi bi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Input de Confirmar Contraseña */}
          <div className="relative">
            <i className="bi bi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Mostrar mensaje de error si las contraseñas no coinciden */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Botón de Crear Cuenta */}
          <button
            type="submit"
            className="w-full bg-amarillo text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Crear cuenta
          </button>
        </form>

        {/* Link para volver a Login */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-gray-600 text-sm">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-yellow-500
               hover:underline font-medium"
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
