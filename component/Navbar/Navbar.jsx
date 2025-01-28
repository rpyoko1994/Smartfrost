import React, { useState } from 'react'
import tech from '../../Assets/tech.webp'


const navbarlinks = [
    {
        id: 1,
        title: "Inicio",
        link: "/"
    },
    {
        id: 2,
        title: "Nosotros",
        link: "/nosotros"
    },
    {
        id: 3,
        title: "Servicios",
        link: "/servicios"
    },
    {
        id: 4,
        title: "Noticias",
        link: "/"
    },
    {
        id: 5,
        title: "Contacto",
        link: "/"
    }
]

const navbarRedes = [
    {
        id: 1,
        title: "instagram",
        link: "https://instagram.com/",
        icon: "bi bi-tiktok"
    },
    {
        id: 2,
        title: "instagram",
        link: "https://instagram.com/",
        icon: "bi bi-facebook"
    },
    {
        id: 3,
        title: "instagram",
        link: "https://instagram.com/",
        icon: "bi bi-instagram"
    },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed top-0 left-0 w-full  bg-opacity-30 backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                <div>
                    <img src={tech} alt='Logo de Sitio' className='w-[150px]' />
                </div>

                <button onClick={toggleMenu} className='md:hidden text-white'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='o o 24 24'
                    >
                        {isOpen ? (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M6 18L1 6M 6L1212"
                        />) : (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M4 6h16M4 12H16 M4 18h16"
                        />)}



                    </svg>
                </button>

                {/*Menu Escritorio  */}

                <div className='hidden md:block'>
                    <ul className='flex justify-items-end sm:space-x-6 space-x-3'>
                        {navbarlinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white sm:text-lg text-sm hover:text-blue-500' href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Redes Sociales */}

                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-6 space-x-3'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='blank'
                                    rel='nooponer noreferrer'
                                    className='text-white sm:text-xl text-sm hover:text-blue-500 inline-block transition-transform duration-300 transform hover:scale-125'
                                    href={link.link}>
                                    <i className={`${link.icon}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
       

            </div>
            {/* Navegacion movil */}

            <div className={`md:hidden absolute  w-full bg-cyan-300 rounded-b-2xl transition-all duration-300 ${isOpen ? "opacity-100 visible": "opacity-0 invisible"}`}>
                    <ul className='flex flex-col px-4 py-2'>
                        {navbarlinks.map((link) => (
                            <li key={link.id} className='text-center  py-2'>
                                <a className='text-white sm:text-lg text-sm hover:text-blue-500' href={link.link} onClick={() => setIsOpen(false)}>{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className='flex space-x-4 py-4 px-4 border-t border-blue-700 justify-center'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='blank'
                                    rel='nooponer noreferrer'
                                    className='inline-block'
                                    href={link.link} onClick={() => setIsOpen(false)} >
                                       
                                    <i className={`${link.icon} items-center text-white text-lg  hover:text-blue-500 inline-block transition-transform duration-300 transform hover:scale-125`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

        </nav>
    )
}

export default Navbar
