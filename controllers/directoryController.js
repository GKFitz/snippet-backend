const Directory = require('../models/directory.js')


//GET all directories
const getDirectories = async (req, res) => {
    const directories = await Directory.find({}).sort({createdAt: -1})

    res.status(200).json(directories)
}


//GET a single Directory
const getDirectory = async (req, res) => {
    const { id } = req.params

    const directory = await Directory.findById(id)

    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)
}


//CREATE a Directory
const createDirectory = async (req, res) => {
    const { title, description } = req.body

    //Adding doc to DB
    try {
        const directory = await Directory.create({ title, description })
        res.status(200).json(directory)
    } catch (error) {
    res. status(400).json({error: error.message})
    }

}

//DELETE a Directory


//UPDATE a Directory


module.exports = {
    getDirectories,
    getDirectory,
    createDirectory,

}