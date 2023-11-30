import AnimatedFaqCard from './AnimatedFaqCard';



const FaqSection = ({ data }) => {
  const { title, faq_cards } = data;
  return (
    <section className="px-4 xl:px-52 bg-zinc-950 pt-8 pb-18 xl:pb-32 xl:pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
        {faq_cards.map((f) => (
          <AnimatedFaqCard data={f} key={f.question} />
        ))}
    </section>
  );
}

export default FaqSection;
