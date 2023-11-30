import Avatar from "./Avatar";

const TestimonialCard = ({ data }) => {
    const { image, name, comment } = data;
    return (
      <div>
        <div className="min-h-[450px] md:min-h-[350px] xl:min-h-[250px] flex flex-col justify-between w-full h-full p-5 rounded-2xl  border shadow border-gray-600 bg-neutral-800">
          <p className="text-base xl:text-xl leading-normal ">{comment}</p>
  
          <Avatar image={image.filename} name={name} />
        </div>
      </div>
    );
  };

  export default TestimonialCard;