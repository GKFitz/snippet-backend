const express = require('express')
const router = express.Router()


const {
    getASnippet,
    // updateSnippet,
    // deleteSnippet
    // updateDirectory

} = require('../controllers/snippetControllers.js')

router.get('/:id', getASnippet)



// //Delete a Snippet
// router.delete('/delete/:id', deleteSnippet)
    


// //UPDATE a Directory
// router.put('/update/:id', updateSnippet)
 





module.exports = router