import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Importación correcta para Swiper v8+
import "swiper/css";
import "swiper/css/pagination";
import paisaje from "../../Assets/foto1.jpeg";

function Carrusel() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carrusel con Swiper */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="absolute h-full w-full"
      >
        {/* Primera diapositiva con caja personalizada */}
        <SwiperSlide className="relative">
          <img
            src={paisaje}
            alt="Paisaje 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white bg-opacity-90 rounded-t-3xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">
              Bienvenido a Smartfrost
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Únete a nuestra misión
            </p>
            <div className="flex flex-col gap-2 mt-10">
              <button className="w-full bg-amarillo text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition">
                Continue
              </button>
              <button className="w-full bg-gray-50 text-yellow-500 font-bold py-2 rounded-lg hover:bg-gray-400 transition">
                Skip
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Segunda diapositiva con caja personalizada */}
        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/29730792/pexels-photo-29730792/free-photo-of-vista-aerea-de-paris-que-captura-el-rio-sena.jpeg"
            alt="Paisaje 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white bg-opacity-90 rounded-t-3xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">
              Descubre nuestras soluciones
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Tecnología de punta para tus proyectos
            </p>
            <div className="flex flex-col gap-2 mt-10">
              <button className="w-full bg-amarillo text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition">
                Continue
              </button>
              <button className="w-full bg-gray-50 text-yellow-500 font-bold py-2 rounded-lg hover:bg-gray-400 transition">
                Skip
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Tercera diapositiva con caja personalizada */}
        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/18915023/pexels-photo-18915023.jpeg"
            alt="Paisaje 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white bg-opacity-90 rounded-t-3xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">
              Construyendo el futuro
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Innovación y sostenibilidad
            </p>
            <div className="flex flex-col gap-2 mt-10">
              <button className="w-full bg-amarillo text-white font-bold py-2 rounded-lg hover:bg-green-600 transition">
                Les´t Star!
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrusel;