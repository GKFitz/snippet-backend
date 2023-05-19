const Directory = require('../models/directory.js')
const mongoose = require('mongoose')



//GET all directories
const getSnippets = async (req, res) => {
    // const directories = await Directory.find({}).sort({createdAt: -1})
    const dirId = req.params.dirId
    const {snippets } = await Directory.findById(dirId)
    res.status(200).json(snippets)
}


//GET a single Directory
// const getDirectory = async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types. ObjectId.isValid(id)) {
//         return res.status(404).json({error: 'No such directory'})
//     }

//     const directory = await Directory.findById(id)

//     if (!directory) {
//         return res.status(404).json({error: 'No such directory'})
//     }
//     res.status(200).json(directory)
// }


// //CREATE a Directory
// const createDirectory = async (req, res) => {
//     const { title, description } = req.body

//     //Adding doc to DB
//     try {
//         const directory = await Directory.create({ title, description })
//         res.status(200).json(directory)
//     } catch (error) {
//     res. status(400).json({error: error.message})
//     }

// }

// //DELETE a Directory
// const deleteDirectory = async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types. ObjectId.isValid(id)) {
//         return res.status(404).json({error: 'No such directory'})
//     }

//     const directory = await Directory.findOneAndDelete({_id: id})

//     if (!directory) {
//         return res.status(404).json({error: 'No such directory'})
//     }
//     res.status(200).json(directory)

// }




// //UPDATE a Directory WITH a snippet
const updateSnippetDir = async (req, res) => {
        let snippetObject = req.body
        const {id} = req.params

    if (!mongoose.Types. ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such directory'})
    }

    const directory = await Directory.findOneAndUpdate({_id: id}, { 
        ...req.body
    })

    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)
    

}
router.put('/:id/reviews', async(req, res) => {
    let reviewObject = req.body
    const {id} = req.params
    await Water.findOneAndUpdate(
        { _id: id }, 
        { $push: { reviews: reviewObject } }, 
        { new: true },
    ) 
    res.redirect('/water')
})


module.exports = {
    getSnippets,
    // getDirectory,
    // createDirectory,
    // deleteDirectory,
    // updateDirectory

}