import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageProvider'
import { ZonesTextsCards } from './ZonesTextsCards'

export const TextsParagraphs = () => {

  const {spanishIsActive} = useContext(LanguageContext)

  return (
    <>
      <h4 className='title-mobile'>
      {
        spanishIsActive ?
          'Proyectos' :
          'Projects'
      }
      </h4>
      
      <p>
      {
        spanishIsActive ?
          'Nuestros proyectos innovadores se centran en la electrificación y descarbonización de Comunidades desfavorecidas, a estas áreas donde se ubican los proyectos las llamamos Zonas de Innovación de ClimateTech.' :
          'Our innovative projects focus on the electrification and decarbonization of Disadvantaged Communities first, we call these areas where the projects are located ClimateTech Innovation Zones.'
      }
      </p>
      
      <p className='font-bold'>
      {
        spanishIsActive ?
          'Características de las Zonas de Innovación' :
          'Innovation Zones Characteristics'
      }
      </p>
      
      <ZonesTextsCards />
      
      <p className='font-bold'>
      {
        spanishIsActive ?
          'Las zonas de innovación de ClimateTech muestran la innovación de vanguardia a través de un modelo de laboratorio vivo de código abierto que enciende otras zonas en las ciudades para seguir.' :
          'ClimateTech Innovation Zones showcase cutting-edge innovation through an open-source living lab model igniting other zones across cities to follow.'
      }
      </p>
    </>
  )
}
