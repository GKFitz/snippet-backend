const Directory = require('../models/directory.js')
// const Snippet = require('../models/snippet.js')
const mongoose = require('mongoose')



//GET all directories
const getSnippets = async (req, res) => {
    // const directories = await Directory.find({}).sort({createdAt: -1})
    const dirId = req.params.dirId
    const {snippets} = await Directory.findById(dirId)
    res.status(200).json(snippets)
}


// GET a single Directory
const getSnippet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types. ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such directory'})
    }

    const directory = await Directory.findById(id)

    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)
}




// //DELETE a Directory
const deleteSnippet = async (req, res) => {
    const { id } = req.params
    const snippet = await Directory.findOneAndDelete({_id: id})
    res.status(200).json(snippet)

}

// //UPDATE a Directory WITH a snippet
const updateSnippetDir = async (req, res) => {
    try{
       const {id} = req.params
       const snippetObject = req.body
       await Directory.findOneAndUpdate(
            { _id: id }, 
            { $push: { snippets: snippetObject } }, 
            { new: true },
        )
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//  Update a snippet
// const updateSnippet = async (req, res) => {
//     const snippet = await Directory.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//     )
//     res.status(200).json(snippet)
// }

// //CREATE a Snippet on Directory
// const createSnippet = (req, res) => {
//     const { title, timestamp } = req.body

//     //Adding doc to DB
//     try {
//         const snippet = new Directory.create({ title, timestamp })
//         res.status(200).json(snippet)
//     } catch (error) {
//     res. status(400).json({error: error.message})
//     }

// }


module.exports = {
    getSnippets,
    updateSnippetDir,
    deleteSnippet,
    // updateSnippet,
    // getDirectory,
    // createSnippet,
    
    // updateDirectory

}