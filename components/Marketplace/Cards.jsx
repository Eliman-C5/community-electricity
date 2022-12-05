import React, { useContext } from 'react'
import { MarketCard } from './MarketCard'
import Section from '../Wrappers/NormalAndFadeInSection'
import { firstMarketCard, marketCards, secondMarketCard } from '../../data/text'
import { LanguageContext } from '../../context/LanguageProvider'

export const Cards = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-2 w-full mx-auto">
      
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
        >
          <div className='grid grid-cols-2'>
            {
              secondMarketCard.map(
                card => (
                  <div className="flex my-2 items-start col-span-full" key={card.id}>
                    <img 
                      src="/images/marketplace/purpleCheck.svg" 
                      alt={spanishIsActive ? card.text.esp : card.text.eng} 
                      className='mr-2'
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
            />
          ))
        }
      </div>
    </Section>
  )
}
