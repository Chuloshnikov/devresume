import React from 'react'
import PortfolioCard from './PortfolioCard';

const PortfolioContainer = ({ data }) => {
    const { title, portfolio_cards } = data;
  return (
    <div className="pt-32 pb-18 xl:pb-32 xl:pt-24">
        <h2
        className="text-4xl font-bold text-center mb-14 xl:mb-20"
        >
            {title}
        </h2>
        {
            portfolio_cards?.map((card, index) => (<PortfolioCard data={card} index={index}/>))
        }
    </div>
  )
}

export default PortfolioContainer