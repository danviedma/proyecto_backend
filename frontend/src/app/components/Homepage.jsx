import Link from "next/link";
import Navbar from "./Navbar";

function Homepage() {
  return (
    //<div className="bg-gradient-to-r from-green-700 via-green-800 to-gray-900">
    <div className="bg-gradient-to-r from-customGreenStart via-customGreenMiddle to-customGreenEnd h-screen relative">
        <div className="border-t-8 border-l-8 w-20 h-20 absolute top-10 left-10 animate-flip-down animate-once animate-duration-[8000ms]"></div>
        <Navbar />
        <div className="absolute top-40 left-20">
        
            <h1 className="text-8xl text-white animate-rotate-x animate-twice animate-duration-[10000ms]">Bienvenido.</h1>
            <p className="text-white w-600">Mi nombre es Alejandro Egaña y soy Full Stack Developer. Vivo en la Quinta Región de Chile. Soy un apasionado por el Desarrollo Web y he trabajado en distintos Proyectos para diferentes Empresas.</p>
           
        </div>
        <div className="flex absolute bottom-12 left-20"> 
            <a href="https://github.com/danviedma" target="_blank" rel="noopener noreferrer">
              <span>
               <img className="w-10 mr-4" src="/git.png" alt="Git Icon" />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-ega%C3%B1a-viedma-26456ab5/" target="_blank" rel="noopener noreferrer">
              <span>
                <img className="w-10" src="/linked.png" alt="Git Icon" />
              </span>
            </a>
        </div>
        <div className="border-b-8 border-r-8 w-20 h-20 absolute bottom-10 right-10 animate-flip-down animate-once animate-duration-[8000ms]"></div>
    </div>
  );
}

export default Homepage;