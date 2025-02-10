import React from 'react'
import Foto from '../../Assets/programa.jpg'

const servicios = [
    { title: "Desarrollo Web", description: "Creamos sitios modernos y funcionales." },
    { title: "Diseño UX/UI", description: "Diseños centrados en la experiencia del usuario." },
    { title: "SEO", description: "Optimizamos tu página para motores de búsqueda." },
  ];

const Hero = () => {
    return (
        
        <section className='mt-36'>
            <section>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                {/* imagen */}
                <div  className='sm:p-10 md:p-15 lg:20 xl:26'>
                    <img src={Foto} alt='Logo de Sitio' className='sm:w-[220px] md:w-[520px] sm:ml-2 rounded-2xl py-6 md:ml-20 shadow-lg' />
                </div>

                {/* Texto */}
                <div className='sm:p-10 md:p-15 lg:20 xl:26'>
                    <h2 className='px-6 text-3xl text-white'> Servicios de Programación para tu Página Web</h2>
                    <p className='px-6 py-8 text-md text-white'> <br></br>En la era digital, contar con una página web funcional, atractiva y personalizada es esencial para destacar en el mercado. Ofrecemos servicios integrales de programación diseñados para satisfacer las necesidades específicas de tu negocio, garantizando una experiencia en línea excepcional para tus clientes.

                        <br></br>¿Qué ofrecemos?
                        Diseño y Desarrollo Web Personalizado:
                        Creamos sitios web únicos y adaptados a la identidad de tu marca. Desde páginas corporativas hasta portales interactivos, nuestra prioridad es plasmar tu visión en cada detalle.

                        <br></br>Optimización para Motores de Búsqueda (SEO):
                        Implementamos estrategias para que tu sitio web sea visible y ocupe los primeros lugares en los buscadores, atrayendo más tráfico orgánico.

                        <br></br>Desarrollo de Tiendas en Línea:
                        Si deseas vender productos o servicios en línea, diseñamos y programamos plataformas de comercio electrónico seguras y eficientes.

                        
                    </p>
                    <div className='flex justify-center gap-4'>
                        <a className='bg-cyan-300 py-2 px-12 rounded-3xl text-blue-900 hover:bg-blue-900 hover:text-cyan-300 transition-all duration-300 items-center'>
                            Contactanos
                        </a>

                    </div>
                </div>
               
            </div>
            </section>
            <section id="servicios" className="p-20 m-6 content-center">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center">
        {servicios.map((service, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
        </section>

       

        
        
    );
}

export default Hero
