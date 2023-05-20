// const Directory = require('../models/directory.js')
// // const Snippet = require('../models/snippet.js')
// const mongoose = require('mongoose')



// //GET all directories
// const getSnippets = async (req, res) => {
//     // const directories = await Directory.find({}).sort({createdAt: -1})
//     const dirId = req.params.dirId
//     const {snippets} = await Directory.findById(dirId)
//     res.status(200).json(snippets)
// }


// // GET a single Directory
// const getOneSnippet = async (req, res) => {
//     const dirId = req.params.dirId;
//     const snippets = req.params.snippets;
//     await Directory
//         .findById(dirId)
//         .select('snippetOne')
//         .exec(function (err, directory) {
//             let response = { };
      
//             if (err) {
//               response = responseDueToError(err);
//             } else if (!directory) {
//               response = responseDueToNotFound();
//             } else {
//               let snippets = directory.snippets.id(id);
      
//               if (snippets === null) {
//                 response = responseDueToNotFound();
//               } else {
//                 response.status = HttpStatus.OK;
//                 response.message = snippets;
//               }
//             }
      
//             res.status(response.status).json(response.message);
//           });
// }

 

// //POST 
// // const createSnippet = async (req, res) => {
// //     const dirId = req.params.dirId;
// //     const newSnip = req.body;
// //     console.log(dirId, newSnip)
// //     await Directory.create( dirId,
// //         { '$push': { snippets : newSnip } },
// //         { 'new': true }
// //     ),
// //     function (err, directory) {
// //         let response = { };
      
// //         if (err) {
// //               response = responseDueToError(err);
// //         } else if (!directory) {
// //               response = responseDueToNotFound();
// //         } else {
// //               response.status = HttpStatus.CREATED;
// //               response.message = directory.snippets; 
// //         }
      
// //         res.status(response.status).json(response.message);
// //     };
// // }

// //PUT
// // const updateSnippetDir = async (req, res) => {
// //     const dirId = req.params.dirId;
// //     const id = req.params.id;

// //     const snippetId = (req.body);
// //     snippetId._id = id;

// //     await Directory.findOneAndUpdate(
// //         { '_id': dirId, 'snippetId._id': id },
// //         { '$set': { 'snippets.$': snippetId } },
// //         {'new': true }
// //     ),
// //     function (err, directory) {
// //         let response = { };
  
// //         if (err) {
// //           response = responseDueToError(err);
// //           res.status(response.status).json(response.message);
// //         } else if (!directory) {
// //           response = responseDueToNotFound();
// //           res.status(response.status).json(response.message);
// //         } else {
// //           project.save(function (err) {
// //             if (err) {
// //               response = responseDueToError(err);
// //             } else {
// //               response.status = HttpStatus.NO_CONTENT;
// //             }
  
// //             res.status(response.status).json(response.message);
// //           })
// //         }
// //     };

// // }

// //UPDATE a Directory WITH a snippet
// // const updateSnippetDir = async (req, res) => {
// //     try{
// //       const id = req.params.dirId
// //       const snippetsObject = req.body
      
// //       console.log(snippetsObject)
// //       console.log(Directory)
// //       await Directory.findOneAndUpdate(
// //         id, 
// //         { $push: { snippets: snippetsObject } }, 
// //         { new: true },
// //       )
// //     }catch (error){
// //         res.status(400).json({error: error.message})
// //     }

// // }



// // //DELETE a Snip
// // const deleteSnippet = async (req, res) => {
// //     const { id } = req.params
// //     const snippet = await Directory.findOneAndDelete({_id: id})
// //     res.status(200).json(snippet)

// // }

// // const deleteSnippet = async (req, res) => {
// //     const dirId = req.params.dirId;
// //     const id = req.params.id;

// //     await Directory.findById(dirId)
// //         .select('id')
// //         .exec(function (err, directory) {
// //             let response = { }
      
// //             if (err) {
// //               response = responseDueToError(err);
// //               res.status(response.status).json(response.message);
// //             } else if (!directory) {
// //               response = responseDueToNotFound();
// //               res.status(response.status).json(response.message);
// //             } else {
// //               let snippet = directory.snippet.id(id);
      
// //               if (snippet !== null) {
// //                 directory.snippet.pull({ '_id': id });
      
// //                 directory.save(function (err) {
// //                   if (err) {
// //                     response = responseDueToError(err);
// //                   } else {
// //                     response.status = HttpStatus.NO_CONTENT;
// //                   }
      
// //                   res.status(response.status).json(response.message);
// //                 })
// //               } else {
// //                 response = responseDueToNotFound();
// //                 res.status(response.status).json(response.message);
// //               }
// //             }
// //           });

// // }


// //  Update a snippet
// // const updateSnippet = async (req, res) => {
// //     const snippet = await Directory.findByIdAndUpdate(
// //         req.params.id,
// //         req.body,
// //     )
// //     res.status(200).json(snippet)
// // }

// // //CREATE a Snippet on Directory
// // const createSnippet = (req, res) => {
// //     const { title, timestamp } = req.body

// //     //Adding doc to DB
// //     try {
// //         const snippet = new Directory.create({ title, timestamp })
// //         res.status(200).json(snippet)
// //     } catch (error) {
// //     res. status(400).json({error: error.message})
// //     }

// // }


// module.exports = {
//     // getSnippets,
//     // updateSnippetDir,
//     // deleteSnippet,
//     // updateSnippet,
//     // getOneSnippet,
//     // createSnippet
    
//     // updateDirectory

// }