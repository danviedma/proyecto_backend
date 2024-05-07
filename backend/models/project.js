const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    technologies: [String],
    url: String,
    imageUrl: String,
    year: Number,
    repositoryUrl: String
});

module.exports = mongoose.model('Project', projectSchema);

/*const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    technologies: [String],
    imageUrl: String,
    
});

module.exports = mongoose.model('Project', projectSchema);*/
