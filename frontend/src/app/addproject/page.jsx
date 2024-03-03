"use client"
import { useState } from "react";
import axios from 'axios';


function AddProject(){
    //Hooks
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [technologies,setTechnologies] = useState('');
    const [imagen, setImagen]=useState('');
    const [year, setYear]=useState('');
    const [repositoryUrl, setRepositoryUrl]=useState('');
    const [errors, setErrors] = useState({});
    
    function addProject() {
        const newProject = {
            title: title,
            description: description,
            technologies: technologies,
            imageUrl: imagen,
            year: year,
            repositoryUrl: repositoryUrl
        };
    
        //axios.post('http://localhost:5050/api/projects/save', newProject)
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/save}`, newProject)
            .then(res => {
                alert('Proyecto agregado a la DB');
                window.location.href = "/projects";
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    // Procesa y almacena los errores de validación
                    const formErrors = err.response.data.errores.reduce((acc, error) => {
                        acc[error.path] = error.msg;  // Usa 'path' en lugar de 'param'
                        return acc;
                    }, {});
                    setErrors(formErrors);
                } else {
                    // Maneja otros tipos de errores
                    console.error(err);
                }
            });
    }

    return(
        <div className="flex flex-col bg-customGreenStart h-full items-center pt-3">
            <div className="row">
            
                <h2 className="text-3xl pt-4 mb-6 text-white"> Agregar un Proyecto </h2>            

            </div>
            
                <div className="">
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="nombre" className="text-white">Nombre</label>
                        <input type="text" className="w-400 h-10" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        {errors.title && <p className="text-white italic text-sm">{errors.title}</p>}
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="desccription" className="text-white">Descripción</label>
                        <input type="text" className="w-400 h-10" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        {errors.description && <p className="text-white italic text-sm">{errors.description}</p>}
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="technologies" className="text-white">Tecnologías</label>
                        <input type="text" className="w-400 h-10" value={technologies} onChange={(e)=>setTechnologies(e.target.value)}/>
                        {errors.technologies && <p className="text-white italic text-sm">{errors.technologies}</p>}
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="Imagen" className="text-white">Imagen</label>
                        <input type="text" className=" w-400 h-10" value={imagen} onChange={(e)=>setImagen(e.target.value)}/>
                        {errors.imageUrl && <p className="text-white italic text-sm">{errors.imageUrl}</p>}
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="technologies" className="text-white">Año Proyecto</label>
                        <input type="text" className="w-400 h-10" value={year} onChange={(e)=>setYear(e.target.value)}/>
                        {errors.year && <p className="text-white italic text-sm">{errors.year}</p>}
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="technologies" className="text-white">Git Repository</label>
                        <input type="text" className="w-400 h-10" value={repositoryUrl} onChange={(e)=>setRepositoryUrl(e.target.value)}/>
                        {errors.repositoryUrl && <p className="text-white italic text-sm">{errors.repositoryUrl}</p>}
                    </div>

                    <button onClick={addProject} className="mb-3 w-400 mr-4 bg-blue-400 p-3 text-center rounded  text-white"> Agregar Proyecto</button>

                </div>
            
        </div>
    )
}

export default AddProject;