import AnimatedServiceCard from "./AnimatedServiceCard";

const ServicesSection = ({ data }) => {
  const { title, service_carts } = data;
  return (
    <section className="pt-8 pb-18 xl:pb-32 xl:pt-24">
      <h2 className="text-4xl font-bold text-center mb-14 xl:mb-20">{title}</h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="">
          {service_carts.map((service, index) => (
            <AnimatedServiceCard data={service} key={service._uid}  index={index}/>
          ))}
        </div>
      </div>
  </section>
  )
}

export default ServicesSection