import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 h-16 w-full shadow-lg flex justify-between items-center px-4 bg-white z-20">
      <div>
        <Link
          to={"/"}
          className="flex justify-start items-center"
          onClick={() => setIsOpen(false)}
        >
          <h1 className="font-bold text-xl">Electra Space</h1>
          <span className="material-symbols-outlined">rocket_launch</span>
        </Link>
      </div>
      <div className="flex justify-center items-center md:hidden">
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "close" : "menu"}
        </span>
      </div>
      <div className="font-cairo flex justify-between items-center max-md:hidden mr-10">
        <Link to="/contact" className="mr-8">
          تواصل معنا
        </Link>
        <Link to="/about">من نحن؟</Link>
      </div>
      <div
        className={`absolute font-cairo bg-white flex justify-center items-start top-16 left-0 w-screen h-screen transition-all duration-300 ease-linear ${
          isOpen ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <div className="flex flex-col justify-evenly items-center w-64 h-64 mt-32">
          <div className="border-b-2 pb-4 w-32 flex justify-center items-center">
            <Link
              to="/"
              className="text-2xl"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              الرئيسية
            </Link>
          </div>
          <div className="border-b-2 pb-4 w-32 flex justify-center items-center">
            <Link
              to="/contact"
              className="text-2xl"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              تواصل معنا
            </Link>
          </div>
          <div className="border-b-2 pb-4 w-32 flex justify-center items-center">
            <Link
              to="/about"
              className="text-2xl"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              من نحن؟
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavBar
