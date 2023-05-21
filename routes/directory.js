const express = require('express')
const Directory = require('../models/directory.js')
// const snippetRouter = require('./snippet')


const {
    getDirectories,
    getDirectory,
    createDirectory,
    deleteDirectory,
    deleteSnippet,
    updateDirectory,
    addSnipToDirectory,

    


} = require('../controllers/directoryController.js')

const router = express.Router()

// router.use(snippetRouter)



//GET ALL Directories
router.get('/', getDirectories)
//     // res.json({message: 'GET ALL DIRECTORIES'})

//GET ALL Snippets on a particular directory
router.get('/:id/snippets', getSnippets)
    // res.json({message: 'GET ALL DIRECTORIES'})


// //GET ONE Directory
router.get('/:id', getDirectory)
//     // res.json({message: 'GET one DIRECTORY'})

//GET ONE Snippet on a Directory
router.get('/:id/snippet/:snippets_index', getOneSnippet)
//     // res.json({message: 'GET one DIRECTORY'})



//POST a new Directory
router.post('/', createDirectory)
    // res.json({message: 'POST A New DIRECTORY'})


//DDELETE a Directory
router.delete('/:id', deleteDirectory)
    // res.json({message: 'GET ALL DIRECTORIES'})


//DELETE a Snippet from Snippet Array on a Directory
// router.delete("/id/snippets/:snippets_index", deleteSnippet)

//UPDATE a Directory
router.put('/:id', updateDirectory)
    // res.json({ message: 'UPDATE a DIRECTORY'})


//UPDATE/ADD a Snippet to Directory
// router.put('/:id/snippets/:snipId', addSnipToDirectory)




// router.route('/:id/snippet')
//     // .post(createSnippet)
//     .put(updateSnippetDir)



// router.put('/:id/snippet/:snippets_index')


module.exports = router;