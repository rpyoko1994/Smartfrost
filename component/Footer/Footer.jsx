import React,{useState} from 'react'



const footerlinks = [
    {
        id: 1,
        title: "Tecnologia Utopica",
        link: "https://tecnologiautopica.com/"
    },
    
]

const footerRedes = [
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

const Footer = () => {
     
    const [isOpen, setIsOpen] = useState(false)

    return (
        <footer className='bg-opacity-30 backdrop-blur-md z-50'>
            <div className='flex justify-center items-center sm:px-12 sm:py-6 px-4 py-3'>

                <div>
                    <ul className='flex justify-items-end sm:space-x-6 space-x-3'>
                        {footerlinks.map((link) => (
                            <div className='text-white text-xl sm:text-sm'>Copyright © 2025 
                                <a className='text-white sm:text-sm text-sm hover:text-blue-500' href={link.link}> {link.title} </a> | Todos los derechos reservados
                            </div>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer
