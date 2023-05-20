const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const snippetSchema = new Schema({
  title: { type: String},
  description: { type: String},
  codeSnip: { type: String},
  articles: { type: String},
  
  
}, {timestamps: true})


const Snippets = mongoose.model("Snippets", snippetsSchema);




module.exports = snippetSchema;