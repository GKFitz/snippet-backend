const express = require('express')
const Directory = require('../models/directory.js')
// const snippetRouter = require('./snippet')


const {
    getDirectories,
    getDirectory,
    createDirectory,
    deleteDirectory,
    updateDirectory,
    addSnipToDirectory
    // updateSnippetDir


} = require('../controllers/directoryController.js')

const router = express.Router()

// router.use(snippetRouter)



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
router.delete('/:id', deleteDirectory)
    // res.json({message: 'GET ALL DIRECTORIES'})


//UPDATE a Directory
router.put('/:id', updateDirectory)
    // res.json({ message: 'UPDATE a DIRECTORY'})


// router.route('/:id/snippet')
//     // .post(createSnippet)
//     .put(updateSnippetDir)

router.put('/:id/snippet/:snippets_index/title', addSnipToDirectory)
    // res.json({ message: 'UPDATE a DIRECTORY'})




module.exports = router;