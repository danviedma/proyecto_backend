const { Router } = require('express');
const { getAllProjects, createProject, updateProject, deleteProject, fetchLatestNews } = require('../controllers/projectController');    
const router = Router();
const { check } = require("express-validator");

const { validateForm, existProjectById} = require("../middlewares/validators");

router.get('/', getAllProjects);

router.post('/save', validateForm, createProject);

router.put('/:id', 
validateForm,
updateProject);

router.delete('/:id', existProjectById, deleteProject);

router.get('/latest-news', fetchLatestNews);

module.exports = router;
