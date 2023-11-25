import Image from "next/image";

const Avatar = (props) => {
    return (
      <div className="flex items-center mt-3 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10 border-2 shadow border-gray-600">
          <Image src={props.image} width="100" height="100" alt="Avatar" />
        </div>
        <div>
          <div className="text-lg font-medium">{props.name}</div>
        </div>
      </div>
    );
  };


export default Avatar;