const Directory = require('../models/directory.js')
const Snippets = require('../models/snippets.js')
const mongoose = require('mongoose')



//BASIC GET ALL directories
const getDirectories = async (req, res) => {
    const directories = await Directory.find({}).sort({createdAt: -1})
    res.status(200).json(directories)
}

//BASIC GET ONE Directory
const getDirectory = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such directory'})
    }
    const directory = await Directory.findById(id)
    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)
}

//BASIC CREATE a Directory
const createDirectory = async (req, res) => {
    const { title, description } = req.body
    //Adding doc to DB
    try {
        const directory = await Directory.create(
            { title, description, snippets:[] }
        )
        res.status(200).json(directory)
    } catch (error) {
    res. status(400).json({error: error.message})
    }

}

//BASIC DELETE a Directory
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

// UPDATE a Directory
const updateDirectory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such directory'})
    }
    
    const directory = await Directory.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if (!directory) {
        return res.status(404).json({error: 'No such directory'})
    }
    res.status(200).json(directory)
}


// Route for CREATEing a new Snippet and UPDATING Directory "snips" field with it a snippet
const addSnippets = (req,res)=>{
    Snippets.create(req.body)
      .then(function(dbSnip) {
          //
            Directory.findOneAndUpdate(
               { _id: req.params.directoryId}, 
               {$push: {snippets: dbSnip._id}}, 
               { new: true }
            ).then(()=> {res.json(dbSnip)})
            
        })
      .catch(function(err) {
        res.json(err);
    });
  
}

//This route and function gets a directory by the Id, then populates it with the Snips in its array 
const getOneAndSnip = (req,res)=> {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    Directory.findOne(
            { _id: req.params.id }
        )
      // this will populate all of the snips associated with that directory
      .populate("snippets")
      .then(function(dbSnippet) {
        // If we were able to successfully find an Directory with the given id, send it back to the client
        res.json(dbSnippet);
      }).catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
    });
}

//GET ALL Snippets in a Directory
const getSnippets = async (req, res) => {
    const id = req.params.id
    const {snippets} = await Directory.findById(id)
    res.status(200).json(snippets)
}


module.exports = {
    getDirectories,
    getDirectory,
    createDirectory,
    deleteDirectory,
    updateDirectory,
    addSnippets,
    getSnippets,
    getOneAndSnip,
}