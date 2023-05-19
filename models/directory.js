const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const snippetSchema = require('./snippets.js')


const directorySchema = new Schema({
  title: { type: String},
  description: { type: String}, 
  snippets: [snippetSchema]
  
}, {timestamps: true})


const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
