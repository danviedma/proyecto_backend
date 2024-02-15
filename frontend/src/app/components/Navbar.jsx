import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center">
        <ul className="flex justify-evenly text-white">
            <li className="m-10 mr-5">
                <Link href="/" passHref>
                    <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Home</span>
                </Link>
            </li>
            <li className="m-10 mr-5">
                <Link href="/projects" passHref>
                    <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Proyectos</span>
                </Link>
            </li>
            <li className="m-10 mr-5">
                <Link href="/news" passHref>
                    <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Noticias</span>
                </Link>
            </li>
            <li className="m-10 mr-5">
                <Link href="/contact" passHref>
                    <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Contacto</span>
                </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
