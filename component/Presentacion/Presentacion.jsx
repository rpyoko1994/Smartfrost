import React, { useEffect } from "react";

function Presentacion({ onComplete }) {
  // Cambiar automáticamente al carrusel después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Llama a la función para pasar al carrusel
    }, 2000); // Temporizador ajustado a 2000ms (2 segundos)

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen bg-[#f2b400]">
      <h1 className="text-xl font-bold text-white p-4">Smartfrost</h1>
    </div>
  );
}

export default Presentacion;
