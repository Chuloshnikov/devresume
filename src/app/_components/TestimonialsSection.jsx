import React from 'react';

const TestimonialsSection = ({ data }) => {
  const { title, testimonial_cards } = data;
  return (
    <section className="px-52 bg-zinc-950 pt-24 pb-32">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {testimonial_cards.map((t) => (
          <TestimonialCard data={t} key={t.name} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;