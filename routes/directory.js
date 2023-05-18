const express = require('express')
const Directory = require('../models/directory.js')

const {
    getDirectories,
    getDirectory,
    createDirectory,

} = require('../controllers/directoryController.js')

const router = express.Router()



//GET all Directories
router.get('/', getDirectories)
//     // res.json({message: 'GET ALL DIRECTORIES'})


// //GET one Directory
router.get('/:id', getDirectory)
//     // res.json({message: 'GET one DIRECTORY'})


//POST a new Directory
router.post('/', createDirectory)
    // res.json({message: 'POST A New DIRECTORY'})


//Delete a Directory
router.delete('/:id', (req, res) => {
    res.json({message: 'GET ALL DIRECTORIES'})
})

//UPDATE a Directory
router.put('/:id', (req, res) => {
    res.json({ message: 'UPDATE a DIRECTORY'})
})






module.exports = router;