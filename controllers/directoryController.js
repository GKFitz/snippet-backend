const Directory = require('../models/directory.js')
// const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


//GET all directories

const getDirectories = async (req, res) => {
    const directories = await Directory.find({}).sort({createdAt: -1})

    res.status(200).json(directories)
}


//GET a single Directory
const getDirectory = async (req, res) => {
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


//CREATE a Directory
const createDirectory = async (req, res) => {
    const { title, description } = req.body

    //Adding doc to DB
    try {
        const directory = await Directory.create({ title, description, snippets:[] })
        res.status(200).json(directory)
    } catch (error) {
    res. status(400).json({error: error.message})
    }

}

//DELETE a Directory
const deleteDirectory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types. ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such directory'})
    }

    const directory = await Directory.findOneAndDelete({_id: id})

    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)

}

//UPDATE a Directory

// const updateDirectory = async (req, res) => {
//     try{
//     const {id} = req.params;
//     const { snippets } = req.body
//     console.log(snippets)
//     console.log(Directory)
//     await Directory.findOneAndUpdate(
//         { _id: ObjectId(id) },
//         { $push: { "snippets": {$each:snippets}}},
//         { new: true },

        
       
//     )}catch (error){
//         res.status(400).json({error: error.message})
//     }
    
// }     
  
//UPDATE a Directory WITH a snippet
const updateDirectory = async (req, res) => {
    try{
         
      const { id }= req.params
      const { snippets } = req.body
    
      console.count()
      console.log(snippets)
      console.log(Directory)
      const directory = await Directory.findOneAndUpdate(
        { _id: (id) }, 
        { $push: { "snippets": {$each:snippets }}}, 
        { new: true },
    )
     res.json(directory)
    }catch (error){
        res.status(400).json({error: error.message})
    }

}

// const deleteDirectory = async (req, res) => {
//     try{
//         const { id }= req.params
//         const directory = await Directory.findOneAndUpdate(
          
//       )
//        res.json(directory)
//       }catch (error){
//           res.status(400).json({error: error.message})
//       }
// }

//UPDATE a Directory WITH a snippet
const addSnipToDirectory = async (req, res) => {
    try{
      const { title } = req.body
      const { id, snippets_index }= req.params
      console.count()
      console.log(snippets)
      console.log(Directory)
      const directory= await Directory.findOneAndUpdate(
        { _id: (id) }, 
        { $set: {[`snippets.${snippets_index}.title`]: title,},}, 
        { new: true }
    )
    res.status(200).json(directory)
    }catch (error){
        res.status(400).json({error: error.message})
    }

}

const de
















// const updateDirectory = async (req, res) => {
//     const {id} = req.params

//     if (!mongoose.Types. ObjectId.isValid(id)) {
//         return res.status(404).json({error: 'No such directory'})
//     }

//     const directory = await Directory.findOneAndUpdate({_id: id}, { 
//         ...req.body
//     })

//     if (!directory) {
//         return res.status(404).json({error: 'No such directory'})
//     }
//     res.status(200).json(directory)
    

// }


//UPDATE a Directory WITH a snippet
// const updateSnippetDir = async (req, res) => {
//     try{
//       const snippetObject = req.body
//       const id = req.params.dirId
//       console.log(snippetObject)
//       console.log(Directory)
//       await Directory.findOneAndUpdate(
//         { _id: id }, 
//         { $push: { snippets: snippetObject } }, 
//         { new: true },
//       )
//     }catch (error){
//         res.status(400).json({error: error.message})
//     }

// }

module.exports = {
    getDirectories,
    getDirectory,
    createDirectory,
    deleteDirectory,
    updateDirectory,
    addSnipToDirectory
    // updateSnippetDir

}