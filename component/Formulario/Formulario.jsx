import React from "react";
import albañil from "../../Assets/albañil.webp"
import { ArrowLeft} from "lucide-react";

const Formulario = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar con botón de ir atrás */}
      <nav className="bg-yellow-500 p-4">
        <button
          onClick={() => window.history.back()}
          className="text-white font-semibold"
        >
         <ArrowLeft size={24} />
        </button>
      </nav>

      {/* Contenedor principal */}
      <div className="container mx-auto">
        {/* Imagen de caricatura */}
        <div className="flex justify-center my-6">
          <img
            src= {albañil}
            alt="Caricatura trabajando"
            className="w-30 h-30"
          />
        </div>

        {/* Formulario */}
        <form className="bg-white pt-4 px-4 shadow-md rounded-t-3xl">

          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block text-xs mt-1 font-medium text-gray-600">Nombre</label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">Apellido</label>
              <input
                type="text"
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
                placeholder="Ingrese su apellido"
              />
            </div>
          </div>

          {/* Correo */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-600">Correo</label>
            <input
              type="email"
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
              placeholder="Ingrese su correo"
            />
          </div>

          {/* Servicios (Desplegable) */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-600">Servicios</label>
            <select className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm">
              <option value="">Seleccione un servicio</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="reparacion">Reparación</option>
              <option value="funciones">Funciones</option>
            </select>
          </div>

          {/* Día y Hora */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-600">Día y Hora</label>
            <input
              type="datetime-local"
              className="mt-1 text-sm block w-full p-1 border border-gray-300 rounded-md"
            />
          </div>

          {/* Teléfono */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-600">Teléfono</label>
            <input
              type="tel"
              className="mt-1 block w-full p-1 border border-gray-300 text-sm rounded-md"
              placeholder="Ingrese su teléfono"
            />
          </div>

          {/* Región */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-600">Región</label>
            <input
              type="text"
              className="mt-1 block w-full p-1 text-sm border border-gray-300 rounded-md"
              placeholder="Ingrese su región"
            />
          </div>

          {/* Botón Enviar */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white text-sm p-2 my-2 rounded-md hover:bg-yellow-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;