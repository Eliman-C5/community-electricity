import Link from 'next/link';
import { useReducer } from 'react';
import { navDesktopLinks, navLinks } from '../../../data/text';
import { navbarMobileReducer } from '../../../reducers/navbarMobileReducer'

const initialState = 'HOME'

//Utilizar useEffect para detectar si un usuario entra a la pagina usando url y asi manejar mejor el estado
export const Paths = ({styles, linkStyles, children}) => {

  const [activePage, activePageDispatch] = useReducer(navbarMobileReducer, initialState);
  
  return (
    <>
      <div className={`block md:hidden ${styles}`}>
        {children}
        {
          navLinks.map(link => (
            <Link 
              href={link.src} 
              key={link.id} 
              className={`text-black font-medium ${linkStyles} ${activePage === link.type && 'font-bold text-[#A795FF]'}`}
              onClick={() => activePageDispatch({type: link.type})}
            >
              {link.title}
            </Link>
          ))
        }
      </div>
      <div className={`hidden md:block ${styles}`}>
        {children}
        {
          navDesktopLinks.map(link => (
            <Link 
              href={link.src} 
              key={link.id} 
              className={`text-black font-medium ${linkStyles} ${activePage === link.type && 'font-bold text-[#A795FF]'}`}
              onClick={() => activePageDispatch({type: link.type})}
            >
              {link.title}
            </Link>
          ))
        }
      </div>
    </>
    
  )
}
