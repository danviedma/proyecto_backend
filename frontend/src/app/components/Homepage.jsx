import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-customGreenStart via-customGreenMiddle to-customGreenEnd">
      <div className="flex-grow">
        <div className="lg:border-t-8 lg:border-l-8 w-20 h-20 absolute top-10 left-10 animate-flip-down animate-once animate-duration-[8000ms]"></div>
        <Navbar />
        <div className="lg:flex relative">
          <div className="absolute top-20 left-20">
            <h1 className="lg:text-8xl text-white animate-rotate-x animate-twice animate-duration-[10000ms]">Bienvenido</h1>
            <p className="text-white lg:w-600">Mi nombre es Alejandro Egaña y soy Full Stack Developer. Vivo en la Quinta Región de Chile. Soy un apasionado por el Desarrollo Web y me gustaría ayudarte en tus próximos proyectos de desarrollo. No dudes en contactarme.</p>
          </div>
          <div>
          <img className="hidden lg:block opacity-50 rounded w-80 absolute top-20 right-60 " src="/binario.jpg" alt="" />
          </div>
        </div>
        <div className="flex absolute bottom-12 left-20"> 
          <a href="https://github.com/danviedma" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <span>
              <img className="w-10 mr-4" src="/github2.svg" alt="Git Icon" />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/alejandro-ega%C3%B1a-viedma-26456ab5/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
            <span>
              <img className="w-10" src="/linked.svg" alt="LinkedIn Icon" />
            </span>
          </a>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      <div className="lg:border-b-8 lg:border-r-8 w-20 h-20 absolute bottom-10 right-10 animate-flip-down animate-once animate-duration-[8000ms]"></div>
    </div>
  );
}

export default Homepage;
