const express = require('express')
const Directory = require('../models/directory.js')
// const snippetRouter = require('./snippet')


const {
    getDirectories,
    getDirectory,
    createDirectory,
    deleteDirectory,
    updateDirectory,
    getSnippets,
    addSnippets,
    getOneAndSnip,
   
    // deleteSnippet,
} = require('../controllers/directoryController.js')

const router = express.Router()


//GET ALL Directories
router.get('/', getDirectories)
    // res.json({message: 'GET ALL DIRECTORIES'})

//GET ONE Directory
router.get('/:id', getDirectory)
    // res.json({message: 'GET one DIRECTORY'})

//POST a new Directory
router.post('/', createDirectory)
    // res.json({message: 'POST A New DIRECTORY'})

//DELETE a Directory
router.delete('/:id', deleteDirectory)
    // res.json({message: 'GET ALL DIRECTORIES'})

//UPDATE a Directory(remember PUT is to replace something)
router.put('/:id', updateDirectory)
    // res.json({ message: 'UPDATE a DIRECTORY'})

//UPDATE/ADD (remember Patch it a partial, concentrated update)
router.patch('/:directoryId', addSnippets)

//
router.get('/get/:id', getOneAndSnip)




//GET ALL Snippets on a particular directory
router.get('/:id/snippets', getSnippets)



module.exports = router;