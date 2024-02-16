import Logo from "../assets/main_logo.png"

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-[#9d459c] flex flex-col justify-between pb-4">
      <div className="mb-6">
        <div className="md:mt-10 mt-16 p-8 flex justify-center items-center">
          <img src={Logo} alt="Logo" className="max-h-64" />
        </div>
        <div className="flex justify-center items-center md:mt-2 mt-4">
          <h1 className="md:text-4xl text-3xl font-bold text-white">Get your service!</h1>
        </div>
        <div className="mt-8 md:mt-4 flex justify-center items-center text-center px-8 text-gray-400">
          <p className="md:text-xl max-w-[500px]">
            We provide services in the field of web design, software,
            advertising and application design.
          </p>
        </div>
        <div className="mt-16 md:mt-10 flex flex-col justify-center items-center">
          <a
            className="max-w-64 font-bold w-1/2 mb-4 px-4 py-2 text-xl h-12 flex justify-center items-center  ont-bold bg-white rounded text-black cursor-pointer"
            href="#services"
            
          >
            إكتشف أحدث خدماتنا
          </a>
          <a
            className="max-w-64 font-bold w-1/2 mb-4 px-4 py-2 text-xl h-12 flex justify-center items-center  ont-bold border-2 rounded text-white cursor-pointer"
            href="#footer"
            
          >
            تواصل معنا
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white animate-pulse">
        <h2>Scroll down</h2>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  )
}
export default Hero
