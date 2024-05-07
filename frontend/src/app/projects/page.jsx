"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function ProjectsPage() {
  
  const [data, setData] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
     const response = await axios.get("http://localhost:5050/api/projects/");
     //const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      
    }
  };

  const deleteProject = async (id) => {
    try {
      //await axios.delete(`http://localhost:5050/api/projects/${id}`);
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`);
      alert('Proyecto borrado');
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
      
    }
  };

  const [isDisabled, setIsDisabled] = useState(true);

  // Función para habilitar el botón
    const enableButton = () => {
    setIsDisabled(false);
    };

  return (
    <div className="bg-customGreenStart h-full">
      <Navbar />
      <div className='flex justify-between'>
        <h2 className="text-white text-3xl ml-40 animate-rotate-x animate-twice animate-duration-[6000ms]"> Proyectos realizados </h2>
        {/* <Link className= "self-end text-white mr-32 hover:text-blue-500" href="/addproject">Agregar Proyecto</Link> */}
        <Link className= "self-end text-white mr-32 hover:text-blue-500" href="/addproject"></Link>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((item) => (
     <div className="card m-8 h-600 w-400 overflow-hidden rounded bg-cream hover:shadow-lg flex flex-col" key={item._id}>
     <img 
       src={item.imageUrl || '/nophoto.png'}
       alt={item.title || 'Noticia'} 
       className="h-44 object-cover rounded w-full" 
     />
     <div className="p-4 flex-grow">
       <p className="mb-1"><span className="font-bold">Nombre:</span> {item.title}</p>
       <p className="mb-1"><span className="font-bold">Descripcion:</span> {item.description}</p>
       <p className="mb-1"><span className="font-bold">Tecnologias:</span> {item.technologies}</p>
       <p className="font-bold">Url: <a href={item.url} target='_blanck' className="text-blue-700">{item.url}</a></p>
       <p className="mb-1"><span className="font-bold">Año:</span> {item.year}</p>
       <p className="font-bold">GitHub repo: <a href={item.repositoryUrl} target='_blanck' className="text-blue-700">{item.repositoryUrl}</a></p>
     </div>
     <div className='p-4'>
       <div className='flex justify-center'>
         {item._id && (
           <Link href={`/editproject/${item._id}`}>
             <button disabled={isDisabled} className="w-20 mr-4 bg-blue-400 p-3 rounded">Editar</button>
           </Link>
         )} 
         <button disabled={isDisabled} className="w-20 bg-blue-400 p-3 rounded" onClick={() => deleteProject(item._id)}>Borrar</button>
       </div>
     </div>
   </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;