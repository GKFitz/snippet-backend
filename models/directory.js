const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const snippetSchema = require('./snippets.js')

// const snippetSchema = new Schema({
//   title: { type: String},
//   description: { type: String},
//   codeSnip: { type: String},
//   articles: { type: String},
  
  
// }, {timestamps: true})

const directorySchema = new Schema({
  title: { type: String},
  description: { type: String}, 
  snippets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Snippets"
   } ],
  
}, {timestamps: true})


const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
