const { Router } = require('express');
const { getAllProjects, createProject, updateProject, deleteProject, fetchLatestNews } = require('../controllers/projectController');    
const router = Router();

router.get('/', getAllProjects);

router.post('/save', createProject);

router.put('/:id', updateProject);

router.delete('/:id', deleteProject);

router.get('/latest-news', fetchLatestNews);

module.exports = router;
