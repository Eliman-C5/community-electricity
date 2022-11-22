import React, { useContext } from 'react'
import Link from 'next/link';
import { LanguageContext } from '../context/LanguageProvider';

const links = [
  {
    id: 1,
    title: 'About',
    src: '/about',
  },
  {
    id: 2,
    title: 'Team',
    src: '/team',
  },
  {
    id: 3,
    title: 'Programs',
    src: '/programs',
  },
  {
    id: 4,
    title: 'Marketplace',
    src: '/marketplace',
  },
  {
    id: 5,
    title: 'Innovation zones',
    src: '/zones',
  },
];

export const Navbar = () => {

  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
    <nav className='max-w-[1441px] mx-auto bg-white flex justify-around h-[76px]'>
        <Link href={'/'} className='flex items-center'>
          <img
            src="/images/logo.png"
            alt="Community logo"
            className="cursor-pointer w-[138px] h-[48px]"
          />
        </Link>
        <div className="flex items-center gap-10 pl-12">
        {
          links.map(link => (
            <Link href={link.src} key={link.id} className='text-black font-medium'>
              {link.title}
            </Link>
          ))
        }
        </div>
        {/* Volverlo un componente */}
        <button 
          className='text-white bg-black my-auto h-[33px] px-[20px]'
          onClick={() => setSpanishIsActive(!spanishIsActive)}
        >
          Contact us
        </button>
    </nav>
  )
}
