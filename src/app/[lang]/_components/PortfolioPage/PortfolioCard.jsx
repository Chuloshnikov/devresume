import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const PortfolioCard = ({ data, index }) => {
    const { title, technologies, description, image, project_link, project_button } = data;
    console.log(project_link)
  return (
    <section 
    key={index}
    className=" mx-auto xl:px-0 w-[80%] mb-2 text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white"
    >
        <div
        className='flex flex-col xl:flex-row p-5 justify-center'
        >
            <div
            className="basis-1/2 flex flex-col justify-around"
            >
                <h3
                className="text-xl"
                >
                    {title}
                </h3>
                <p>{technologies}</p>
                <p
                className="max-w-[400px] mx-auto text-sm xl:text-base"
                >
                    {description}
                </p>
                <Link
                href={project_link.url}
                className="bg-orange-500 hover:bg-orange-700 text-white p-3 rounded-md duration-300 max-w-max mx-auto flex gap-1 justify-center items-center"
                >
                    <span>{project_button}</span>
                    <IoIosArrowForward/>
                </Link>
            </div>
            <div
            className="w-full xl:basis-1/2 flex items-center justify-center"
            >
                <Image 
                src={image.filename}
                width={529}
                height={529}
                className={"object-contain rounded-xl border shadow border-gray-600"}
                />
            </div>
        </div>
    </section>
  )
}

export default PortfolioCard;