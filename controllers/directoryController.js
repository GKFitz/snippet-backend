const Directory = require('../models/directory.js')
// const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


//GET ALL directories

const getDirectories = async (req, res) => {
    const directories = await Directory.find({}).sort({createdAt: -1})

    res.status(200).json(directories)
}


//GET ALL Snippets on a Directory
const getSnippets = async (req, res) => {
    // const directories = await Directory.find({}).sort({createdAt: -1})
    const id = req.params.id
    const {snippets} = await Directory.findById(id)
    res.status(200).json(snippets)
}

//GET ONE Directory
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

// GET ONE Snippet from a Directory
const getOneSnippet = async (req, res) => {
    const { id } = req.params;
    const { snippets } = req.params.snippets;
    await Directory
        .findById(id)
        .select('snippets')
        .exec(function (err, directory) {
            let response = { };
      
            if (err) {
              response = responseDueToError(err);
            } else if (!directory) {
              response = responseDueToNotFound();
            } else {
              let snippets = directory.snippets.id(id);
      
              if (snippets === null) {
                response = responseDueToNotFound();
              } else {
                response.status = HttpStatus.OK;
                response.message = snippets;
              }
            }
      
            res.status(response.status).json(response.message);
          });
}



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

// DELETE a Directory
const deleteDirectory = async (req, res) => {
    try{
    const { id }= req.params
    const directory = await Directory.findOneAndUpdate(
    )
    res.json(directory)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a Snippet from Directory
// const deleteSnippet = async (req, res) => {
//     const {id, snippets_index} = req.params;
//     const directory = await Directory.findOne({_id: (id)}
//     if (err) {
//         console.error("cannot get user", err)
//         res.status(404)
//     } else {
//         const snippet = directory.snippets[snippets_index];

//         const directory = Directory.findOneAndUpdate(

//         )

//     }
    

//     )


// }



  
//UPDATE a whole Directory
const updateDirectory = async (req, res) => {
    try{
    const { id }= req.params
    const { snippets } = req.body
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



//UPDATE/ADD a Snippet to a Directory
// const addSnipToDirectory = async (req, res) => {
//     try{
//       const snippets  = req.body
//       const { id, snipId }= req.params
//       console.count()
//     //   console.log(snippets)
//       console.log(Directory)
//       const directory= await Directory.findOneAndUpdate(
//         { _id: (id) }, 
//         { $set: {[`snippets.${snipId}`]: snippets,},},
//         // { $set: {'snippets.0.description': 'something', 'snippets.0.codeSnip': 'console.log(1)'} 
//         { new: true }
//     )
//     res.status(200).json(directory)
//     }catch (error){
//         res.status(400).json({error: error.message})
//     }

// }


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
    addSnipToDirectory,
    getSnippets,
    getOneSnippet

    // updateSnippetDir

}