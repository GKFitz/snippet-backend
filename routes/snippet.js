const express = require('express')
const router = express.Router()


const {
    getSnippets,
    updateSnippetDir,
    //updateSnippet
    // getDirectory,
    // createSnippet,
    deleteSnippet,
    // updateDirectory

} = require('../controllers/snippetControllers.js')




router.route('/:dirId/snippet')
    .get(getSnippets)
    // .post(createSnippet)


// update and add a snip to the directory
router.route('/:dirId/snippet/:id')
    .delete(deleteSnippet)
    .put(updateSnippetDir)

// router.route('/:dirId/snippet/:id')
//     .get(getSnippet)
//     .delete(deleteSnippet)
//    .put(updateSnippet)
           
    


//GET all Directories
// router.get('/:dirId/snippet', getSnippets)
//     // res.json({message: 'GET ALL DIRECTORIES'})


// //GET one Directory
// router.get('/:dirId/snippet/:id', getDirectory)
// //     // res.json({message: 'GET one DIRECTORY'})


//POST a new Directory
// router.post('/:dirId/snippet', createDirectory)
    // res.json({message: 'POST A New DIRECTORY'})


//Delete a Directory
// router.delete('/:dirId/snippet/:id', deleteDirectory)
//     // res.json({message: 'GET ALL DIRECTORIES'})


//UPDATE a Directory
// router.put('/:id', updateDirectory)
//     // res.json({ message: 'UPDATE a DIRECTORY'})





module.exports = router