import React from 'react'
import FaqCard from './FaqCard';

const FaqSection = ({ data }) => {
  const { title, faq_cards } = data;
  return (
    <section className="px-52 bg-zinc-950 pt-20 pb-36">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faq_cards.map((f) => (
          <FaqCard data={f} key={f.question} />
        ))}
      </div>
    </section>
  );
}

export default FaqSection;