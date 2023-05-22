// const Directory = require('../models/directory.js')
const Snippet = require('../models/snippets.js')
// const mongoose = require('mongoose')


//Get ONE Snippet
const getASnippet = (req,res)=>{
    // Using the id passed in the id parameter
    Snippet.findOne({ _id: req.params.id })
      //populate all of the fields associated with it
      .then(function(getSnippets) {
        // If we were able to successfully find an Snippet with the given id and send it
        res.json(getSnippets);
      }).catch(function(err) {
        res.json(err);
    });
}


// //DELETE a Snippet
const deleteSnippet = async (req, res) => {
   const { id } = req.params
    const snippet = await Snippet.findOneAndDelete(
        {_id: id}
    )
    res.status(200).json(snippet)
}

// UPDATE Snippet
//NOTE: unlike the PAtch for the Directories Snippet(snip)
const updateSnippet = (req, res) => {
    Snippet.findByIdAndUpdate(
        { _id: req.params.id }, 
        req.body, {
        new: true,
        runValidators: true
    }).then((updateSnippet) => res.json(updateSnippet))
        .catch((err) => console.log(err));
}

module.exports = {
    getASnippet,
    deleteSnippet,
    updateSnippet
   
}