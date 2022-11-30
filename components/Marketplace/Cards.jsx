import React from 'react'
import { MarketCard } from './MarketCard'
import Section from '../Wrappers/NormalAndFadeInSection'
import { marketCards } from '../../data/text'

const firstMarketCard = [
  {
    id: 1, 
    text: {
      eng: 'Optimization',
      esp: ''
    },
  },
  {
    id: 2, 
    text: {
      eng: 'Monetization',
      esp: ''
    },
  },
  {
    id: 3, 
    text: {
      eng: 'Monitoring',
      esp: ''
    },
  },
  {
    id: 4, 
    text: {
      eng: 'Reward',
      esp: ''
    },
  },
  {
    id: 5, 
    text: {
      eng: 'Cyber secure',
      esp: ''
    },
  },
  {
    id: 6, 
    text: {
      eng: 'Connect IOT',
      esp: ''
    },
  }
];

const secondMarketCard = [
  {
    id: 1, 
    text: {
      eng: 'Under Voltage',
      esp: ''
    },
  },
  {
    id: 2, 
    text: {
      eng: 'Over Voltage',
      esp: ''
    },
  },
  {
    id: 3, 
    text: {
      eng: 'Over-Current',
      esp: ''
    },
  },
  {
    id: 4, 
    text: {
      eng: 'Safety Fuse (300A)',
      esp: ''
    },
  },
  {
    id: 5, 
    text: {
      eng: 'BMS (Battery Management System)',
      esp: ''
    },
  },
];

//Se puede optimizar, creando un componente que maneje la logica del children
//Pasar textos a text.js
export const Cards = () => {
  return (
    <Section>
      <div className="flex flex-wrap flex-col md:flex-row gap-6 md:w-[780px] mx-auto">
      
        <MarketCard
          name={marketCards[0].name}
          text={marketCards[0].text.eng}
          src={marketCards[0].src}
          cardHeight={marketCards[0].height}
        >
          <div className='grid grid-cols-2'>
            {
              firstMarketCard.map(
                card => (
                  <div className="flex my-2" key={card.id}>
                    <img 
                      src="/images/marketplace/purpleCheck.svg" 
                      alt={card.text.eng} 
                      className='mr-2 max-h-[22px] max-w-[22px]'
                    /> 
                      {card.text.eng}
                  </div>
                ))
            }
          </div>
        </MarketCard>
        
        <MarketCard
          name={marketCards[1].name}
          text={marketCards[1].text.eng}
          src={marketCards[1].src}
          cardHeight={marketCards[1].height}
        >
          <div className='grid grid-cols-2'>
            {
              secondMarketCard.map(
                card => (
                  <div className="flex my-2" key={card.id}>
                    <img 
                      src="/images/marketplace/purpleCheck.svg" 
                      alt={card.text.eng} 
                      className='mr-2'
                    /> 
                      {card.text.eng}
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
              text={card.text.eng}
              src={card.src}
              cardHeight={card.height}
            />
          ))
        }
      </div>
    </Section>
  )
}
