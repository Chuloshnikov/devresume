import Link from "next/link";

const Navbar = ({ data }) => {
  const { title, contact_me_btn } = data;
  return (
    <div
    className="w-full"
    >
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
                  <span>{title}</span>
                </span>
              </Link>
            </div>

            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <Link href="/uk">UA</Link>
              <Link href="/pl">PL</Link>
              <Link href="/en">EN</Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-700 duration-300 rounded-md md:ml-5"
              >
                {contact_me_btn}
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;