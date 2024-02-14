"use client"
import { useState } from "react";
import axios from 'axios';


function AddProject(){
    //Hooks
    const [title,setNombre] = useState('');
    const [description,setRaza] = useState('');
    const [technologies,setPeso] = useState('');
    const [imagen, setImagen]=useState('');
    
    function addProject(){
        const newProject = {
            title:title,
            description:description,
            technologies:technologies,
            imageUrl:imagen
        }
        axios.post('http://localhost:5050/api/projects/save', newProject)
        .then(res=> console.log(res.data))
        .then(err=>console.log(err))
        alert('Proyecto agregado a la DB')
        
    }

    return(
        <div className="flex flex-col bg-customGreenStart h-screen items-center pt-24">
            <div className="row">
            
                <h2 className="text-3xl mt-4 mb-6 text-white"> Agregar un Proyecto </h2>            

            </div>
            
                <div className="">
                    <div className="mb-6 flex flex-col">
                        <label htmlFor="nombre" className="text-white">Nombre</label>
                        <input type="text" className="w-400 h-10" value={title} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="desccription" className="text-white">Descripción</label>
                        <input type="text" className="w-400 h-10" value={description} onChange={(e)=>setRaza(e.target.value)}/>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="technologies" className="text-white">Tecnologías</label>
                        <input type="text" className="w-400 h-10" value={technologies} onChange={(e)=>setPeso(e.target.value)}/>
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label htmlFor="Imagen" className="text-white">Imagen</label>
                        <input type="text" className=" w-400 h-10" value={imagen} onChange={(e)=>setImagen(e.target.value)}/>
                    </div>

                    <button onClick={addProject} className="mb-3 w-400 mr-4 bg-blue-400 p-3 text-center rounded  text-white"> Agregar Proyecto</button>

                </div>
            
        </div>
    )
}

export default AddProject;