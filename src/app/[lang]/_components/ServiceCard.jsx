const ServiceCard = ({ data, index }) => {
    const { description } = data;
  return (
    <>
      <div className="w-full mb-2 text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <p className="text-sm lg:text-xl my-4 mx-2">{description}</p>
      </div>
    </>
  )
}

export default ServiceCard;