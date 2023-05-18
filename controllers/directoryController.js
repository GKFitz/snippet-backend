const Directory = require('../models/directory.js')


//GET all directories



//GET a single Directory


//CREATE a Directory
const createDirectory = async (req, res) => {
    const { title, description } = req.body
    try {
        const directory = await Directory.create({ title, description})
        res.status(200).json(directory)
    }catch (error) {
    res. status(400).json({error: error.message})


}}



//DELETE a Directory


//UPDATE a Directory