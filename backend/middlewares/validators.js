const { validationResult, body } = require("express-validator");
const Proyecto = require("../models/project");

const validateForm = [
    // Lista de campos para validar
    body('title').not().isEmpty().withMessage('El título es obligatorio!!'),
    body('description').not().isEmpty().withMessage('La descripción es obligatoria!!'),
    body('technologies').not().isEmpty().withMessage('Las tecnologías son obligatorias!!'),
    //body('imageUrl').not().isEmpty().withMessage('La URL de la imagen es obligatoria!!'),
    body('year').not().isEmpty().withMessage('El año es obligatorio!!')
           .isNumeric().withMessage('El año debe ser un valor numérico'),
    body('repositoryUrl').not().isEmpty().withMessage('La URL del repositorio es obligatoria!!')
                         .isURL().withMessage('La URL del repositorio debe ser una URL válida')
                         .matches(/https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/).withMessage('La URL debe ser un repositorio de GitHub válido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Si hay errores, responde con un estado 400 y los detalles de los errores
             // Imprimir para depuración
            return res.status(400).json({ errores: errors.array() });
        }
        next();
    }
];

const existProjectById = async (req, res, next) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);
        if (!proyecto) {
            return res.status(404).json({ mensaje: "El proyecto no existe" });
        }
        req.proyecto = proyecto;
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {  
    validateForm,
    existProjectById
};

