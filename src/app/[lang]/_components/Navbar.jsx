import Link from "next/link";

const Navbar = ({ data }) => {
  const { title, contact_me_btn } = data;
  return (
    <div
    className="w-full fixed bg-black/70 backdrop-blur-lg z-50"
    >
        <nav className="container relative flex items-center justify-between p-8 mx-auto xl:px-0">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-lg mdl:text-2xl font-medium text-gray-100">
                  <span>{title}</span>
                </span>
              </Link>
            </div>

            <div className=" mr-3 space-x-4">
              <Link className="hover:text-gray-300 duration-200" href="/uk">UA</Link>
              <Link className="hover:text-gray-300 duration-200" href="/pl">PL</Link>
              <Link className="hover:text-gray-300 duration-200" href="/en">EN</Link>
              <Link
                href="#contact"
                className="hidden lg:inline px-4 py-2 text-white bg-orange-500 hover:bg-orange-700 duration-300 rounded-md md:ml-5"
              >
                {contact_me_btn}
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;