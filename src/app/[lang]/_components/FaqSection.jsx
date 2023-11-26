import FaqCard from './FaqCard';


const FaqSection = ({ data }) => {
  const { title, faq_cards } = data;
  return (
    <section className="px-4 xl:px-52 bg-zinc-950 pt-20 pb-36">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
        {faq_cards.map((f) => (
          <FaqCard data={f} key={f.question} />
        ))}
    </section>
  );
}

export default FaqSection;
