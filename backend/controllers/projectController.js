const Project = require('../models/project'); 
const newsService = require('../services/newsService');

getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find(); // Obtiene todos los proyectos
        res.json(projects);
    } catch (err) {
        res.status(500).send('Error al obtener los proyectos: ' + err);
    }
};

createProject = async (req, res) => {
    try{
        const { title, description, technologies, imageUrl, year, repositoryUrl } = req.body;
        let newProject = await Project.create({
            title,
            description,
            technologies,
            imageUrl,
            year,
            repositoryUrl
        });
        res.status(201).json({
            status: "success",
            data: newProject,
          });
        } catch (error) {
          res.status(404).send(error);
        }

};

updateProject = async (req, res) => {
    try {
        const { id} = req.params;
        const { title, description, technologies, imageUrl, year, repositoryUrl } = req.body;
        const project = await Project.findByIdAndUpdate(id, { title, description, technologies, imageUrl, year, repositoryUrl }, { new: true });
        if (!project) {
          return res.status(404).send('Proyecto no encontrado');
        }
        res.send(project);
      } catch (error) {
        console.error(error); // Para depuración en el servidor
        res.status(500).send(error);
      }
};


deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
    
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).send('Proyecto no encontrada' + id);
        }
    
        res.send({ message: 'Proyecto eliminada con éxito' });
    } catch (error) {
        res.status(500).send(error);
    }
};

fetchLatestNews = async (req, res) => {
    try {
        const newsData = await newsService.getLatestNews();
        res.json(newsData);
    } catch (error) {
        res.status(500).send('Error al obtener las últimas noticias: ' + error);
    }
};

module.exports = { getAllProjects, createProject, updateProject, deleteProject, fetchLatestNews};



  


    