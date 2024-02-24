"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/app/components/Footer';

function EditProject({ params }) {
    const { id } = params; 
    const [errors, setErrors] = useState({});

    const [project, setProject] = useState({
        title: '',
        description: '',
        technologies: '',
        year: '',
        repositoryUrl: ''
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
                            technologies: foundProject.technologies,
                            year: foundProject.year,
                            repositoryUrl: foundProject.repositoryUrl
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
            year: project.year,
            repositoryUrl: project.repositoryUrl
        };
    
        axios.put(`http://localhost:5050/api/projects/${id}`, projectUpdate)
            .then(res => {
                console.log(res.data);
                alert('Proyecto actualizado con éxito!');
                //agregar lógica adicional, como redireccionar al usuario
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    
                    const formErrors = err.response.data.errores.reduce((acc, error) => {
                        acc[error.path] = error.msg; 
                        return acc;
                    }, {});
                    setErrors(formErrors);
                } else {
                    
                    console.error(err);
                }
            });
    }
    
    
    const handleChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value});
    }

    return (
        <div className="flex flex-col bg-customGreenStart items-center pt-10 h-screen">
            <div className="row">
            <h2 className="text-3xl mb-4 text-white"> Editar Proyecto </h2>
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
                        {errors.title && <p className="text-white italic text-sm">{errors.title}</p>}
                       
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
                        {errors.description && <p className="text-white">{errors.description}</p>}
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
                        {errors.technologies && <p className="text-white">{errors.technologies}</p>}
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="text-white" htmlFor="year">Año Proyecto</label>
                        <input
                            type="text"
                            className="w-400 h-10"
                            id="year"
                            name="year"
                            value={project.year}
                            onChange={handleChange}
                        />
                        {errors.year && <p className="text-white">{errors.year}</p>}
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="text-white" htmlFor="technologies">Git Repository</label>
                        <input
                            type="text"
                            className="w-400 h-10"
                            id="repositoryUrl"
                            name="repositoryUrl"
                            value={project.repositoryUrl}
                            onChange={handleChange}
                        />
                        {errors.repositoryUrl && <p className="text-white italic">{errors.repositoryUrl}</p>}
                    </div>

                    <button onClick={editProject} className="mb-3 w-400 mr-4 bg-blue-400 p-3 text-center rounded  text-white">Actualizar Proyecto</button>
                
            </div>
        </div>
    );
}

export default EditProject;

