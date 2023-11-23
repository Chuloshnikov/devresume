import ServiceCard from "./ServiceCard";

const ServicesSection = ({ data }) => {
  const { title, service_carts } = data;
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="">
          {service_carts.map((service) => (
            <ServiceCard data={service} key={service._uid} />
          ))}
        </div>
      </div>
  </section>
  )
}

export default ServicesSection