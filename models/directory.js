const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directorySchema = new Schema({
  title: { type: String},
  description: { type: String}, 
  
  
}, {timestamps: true})


const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
