const ServiceCard = ({ data }) => {
    const { title, subtitle, price, description } = data;
  return (
    <>
      <div className="text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-xl text-gray-400">{subtitle}</p>
        <p className="text-xl mt-4">{description}</p>
      </div>
    </>
  )
}

export default ServiceCard;