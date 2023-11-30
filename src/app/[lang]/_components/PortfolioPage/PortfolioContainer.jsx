import React from 'react'
import AnimatedPortfolioCard from './AnimatedPortfolioCard';

const PortfolioContainer = ({ data }) => {
    const { title, portfolio_cards } = data;
  return (
    <div className="pt-32 pb-18 xl:pb-32 xl:pt-24 h-full">
        <h2
        className="text-4xl font-bold text-center mb-14 xl:mb-20"
        >
            {title}
        </h2>
        <div
        className='w-[80%] mx-auto'
        >
          {
              portfolio_cards?.map((card, index) => (<AnimatedPortfolioCard data={card} index={index}/>))
          }
        </div>
    </div>
  )
}

export default PortfolioContainer