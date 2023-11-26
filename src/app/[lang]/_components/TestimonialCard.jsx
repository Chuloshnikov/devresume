import Avatar from "./Avatar";

const TestimonialCard = ({ data }) => {
    const { image, name, comment } = data;
    return (
        <div className="min-h-[250px] flex flex-col justify-between w-full">
          <p className="text-base xl:text-xl leading-normal ">{comment}</p>  
          <Avatar image={image.filename} name={name} />
        </div>
    );
  };

  export default TestimonialCard;