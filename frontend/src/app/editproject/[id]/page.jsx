"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

function EditProject({ params }) {
    const { id } = params; 
    const [project, setProject] = useState({
        title: '',
        description: '',
        technologies: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5050/api/projects`)
                .then(res => {
                    console.log("Proyectos:", res.data);
                    const foundProject = res.data.find(p => p._id === id);
                    console.log("Proyecto encontrado:", foundProject);
                    if (foundProject) {
                        setProject({
                            title: foundProject.title,
                            description: foundProject.description,
                            technologies: foundProject.technologies
                        });
                    }
                })
                .catch(err => console.error(err));
        }
    }, [id]);

    function editProject() {
        const projectUpdate = {
            title: project.title,
            description: project.description,
            technologies: project.technologies,
        };
        console.log("Proyecto a actualizar:", projectUpdate);
        axios.put(`http://localhost:5050/api/projects/${id}`, projectUpdate)
            .then(res => {
                console.log(res.data);
                alert('Proyecto actualizado con éxito!');
                // Redirección después de actualizar el proyecto
            })
            .catch(err => console.error(err));
    }

    const handleChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value});
    }

    return (
        <div className="flex flex-col bg-customGreenStart h-screen items-center pt-24">
            <div className="row">
            <h2 className="text-3xl mt-4 mb-6 text-white"> Editar Proyecto </h2>
            </div>
            <div className="row">
                
                    <div className="mb-6 flex flex-col">
                        <label className="text-white" htmlFor="title">Nombre del Proyecto</label>
                        <input
                            type="text"
                            className="w-400 h-10"
                            id="title"
                            name="title"
                            value={project.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label className="text-white" htmlFor="description">Descripción</label>
                        <textarea
                            className="w-400 h-20"
                            id="description"
                            name="description"
                            value={project.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6 flex flex-col">
                        <label className="text-white" htmlFor="technologies">Tecnologías</label>
                        <input
                            type="text"
                            className="w-400 h-10"
                            id="technologies"
                            name="technologies"
                            value={project.technologies}
                            onChange={handleChange}
                        />
                    </div>

                    <button onClick={editProject} className="mb-3 w-400 mr-4 bg-blue-400 p-3 text-center rounded  text-white">Actualizar Proyecto</button>
                
            </div>
        </div>
    );
}

export default EditProject;

