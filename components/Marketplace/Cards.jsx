import React, { useContext } from 'react'
import { MarketCard } from './MarketCard'
import Section from '../Wrappers/NormalAndFadeInSection'
import { firstMarketCard, marketCards, secondMarketCard } from '../../data/text'
import { LanguageContext } from '../../context/LanguageProvider'

export const Cards = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
    
      <h4 className='title-mobile md:text-[35px] text-center mb-[40px]'>
      {
        spanishIsActive ?
        'Kit de prosumidor' :
        'Prosumer Kit'
      }
      </h4>
    
      <div className="flex flex-wrap flex-col justify-center gap-2 xl:grid grid-cols-2  w-full mx-auto">
      
        <MarketCard
          name={marketCards[0].name}
          text={spanishIsActive ? marketCards[0].text.esp : marketCards[0].text.eng}
          src={marketCards[0].src}
        >
          <div className='grid grid-cols-2'>
            {
              firstMarketCard.map(
                card => (
                  <div className="flex my-2" key={card.id}>
                    <img 
                      src="/images/marketplace/purpleCheck.svg" 
                      alt={spanishIsActive ? card.text.esp : card.text.eng} 
                      className='mr-2 max-h-[22px] max-w-[22px]'
                    /> 
                      {spanishIsActive ? card.text.esp : card.text.eng}
                  </div>
                ))
            }
          </div>
        </MarketCard>
        
        <MarketCard
          name={marketCards[1].name}
          text={spanishIsActive ? marketCards[1].text.esp : marketCards[1].text.eng}
          src={marketCards[1].src}
          style={'xl:mr-auto'}
        >
          <div className='grid grid-cols-2'>
            {
              secondMarketCard.map(
                card => (
                  <div className="flex my-2 items-start col-span-full md:col-span-1" key={card.id}>
                    <img 
                      src="/images/marketplace/purpleCheck.svg" 
                      alt={spanishIsActive ? card.text.esp : card.text.eng} 
                      className='mr-2 max-h-[22px] max-w-[22px]'
                    /> 
                      {spanishIsActive ? card.text.esp : card.text.eng}
                  </div>
                ))
            }
          </div>
        </MarketCard>
        
        {
          marketCards.map(card => card.id > 2 && (
            <MarketCard
              key={card.id}
              name={card.name}
              text={spanishIsActive ? card.text.esp : card.text.eng}
              src={card.src}
              style={card.id === 3? 'xl:ml-auto' : 'xl:mr-auto'}
            />
          ))
        }
      </div>
    </Section>
  )
}
