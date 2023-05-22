const express = require('express')
const router = express.Router()


const {
    getASnippet,
    deleteSnippet,
    // updateSnippet

} = require('../controllers/snippetControllers.js')


//GET ONE snippet
router.get('/:id', getASnippet)

//DELETE a Snippet
router.delete('/delete/:id', deleteSnippet)

//UPDATE a Snippet
// router.put('/update/:id', updateSnippet)
 
module.exports = router