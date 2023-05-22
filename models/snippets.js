const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const snippetSchema = new Schema({
  title: { type: String},
  description: { type: String},
  codeSnip: { type: String},
  articles: { type: String},
  
  
}, {timestamps: true})







module.exports = mongoose.model("Snippets", snippetSchema);