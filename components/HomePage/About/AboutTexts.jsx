import { aboutSection } from '../../../data/text'
import { LearnMoreBtn } from '../../Atoms/LearnMoreBtn'

export const AboutTexts = ({spanishIsActive}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 xl:gap-20">
        
        {/*  Componetizar para quitar llaves. Mover los textos a text.js para que sea mas legible */}
        <div className="block md:hidden">
          <h2 className='title-mobile md:title block md:hidden'>
            {
              spanishIsActive ?
              'Acerca' :
              'About'
            }
          </h2>
            
          {
            spanishIsActive ?
            aboutSection.esp.map(info => info.id !== 3 && <p key={info.id} className='my-4'>{info.text}</p>) :
            aboutSection.eng.map(info => info.id !== 3 && <p key={info.id} className='my-4'>{info.text}</p>)
          }
        </div>
          
        <img src="/images/aboutHome.png" alt="About Home" className='w-full mx-auto md:h-[300px] md:w-1/2  xl:w-[560px] xl:h-[435px]' />
        
        <div className="block md:hidden">
          {
            spanishIsActive ?
            aboutSection.esp.map(info => info.id === 3 && <p key={info.id} className='my-4'>{info.text}</p>) :
            aboutSection.eng.map(info => info.id === 3 && <p key={info.id} className='my-4'>{info.text}</p>)
          }
        </div>
        
        <div className="flex flex-col gap-4 lg:ml-auto lg:w-1/2">
        
          <h2 className='title-mobile md:title hidden md:block'>
          {
            spanishIsActive ?
            'Acerca' :
            'About'
          }
          </h2>
          
          <div className="hidden md:block">
          {
            spanishIsActive ?
            aboutSection.esp.map(info => <p key={info.id} className='my-2'>{info.text}</p>) :
            aboutSection.eng.map(info => <p key={info.id} className='my-2'>{info.text}</p>)
          }
          </div>
        
          <LearnMoreBtn boxStyles='' spanishIsActive={spanishIsActive} />
        
        </div>
        
    </div>
  )
}
