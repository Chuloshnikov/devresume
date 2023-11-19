const ServicesSection = ({ data }) => {
  const { title, service_cards } = data;
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="">
          {service_cards.map((s) => (
            <ServiceCard data={s} key={s.title} />
          ))}
        </div>
      </div>
  </section>
  )
}

export default ServicesSection