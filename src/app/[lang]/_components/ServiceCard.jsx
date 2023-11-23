const ServiceCard = ({ data }) => {
    const { description } = data;
  return (
    <>
      <div className="text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <p className="text-xl mt-4">{description}</p>
      </div>
    </>
  )
}

export default ServiceCard;