import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center">
        <ul className="flex justify-evenly text-white">
            <li className="m-10 mr-5"><Link href="/">Home</Link></li>
            <li className="m-10 mr-5"><Link href="/projects">Proyectos</Link></li>
            <li className="m-10 mr-5"><Link href="/news">Noticias</Link></li>
            <li className="m-10 mr-5"><Link href="/contact">Contacto</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;