import Avatar from "./Avatar";

const TestimonialCard = ({ data }) => {
    const { image, name, comment } = data;
    return (
      <div>
        <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl  py-5 border shadow border-gray-600 bg-neutral-800">
          <p className="text-base xl:text-xl leading-normal ">{comment}</p>
  
          <Avatar image={image.filename} name={name} />
        </div>
      </div>
    );
  };

  export default TestimonialCard;