const express = require('express')

const router = express.Router()



//GET all Directories
router.get('/', (req, res) => {
    res.json({message: 'GET ALL DIRECTORIES'})
})

//GET one Directory
router.get('/:id', (req, res) => {
    res.json({message: 'GET one DIRECTORY'})
})

//POST a new Directory
router.post('/', (req, res) => {
    res.json({message: 'POST A New DIRECTORY'})
})

//Delete a Directory
router.delete('/:id', (req, res) => {
    res.json({message: 'GET ALL DIRECTORIES'})
})

//UPDATE a Directory
router.put('/:id', (req, res) => {
    res.json({ message: 'UPDATE a DIRECTORY'})
})

//I for INDEX
//localhost:3000/workouts/allWorkouts
// directoryRouter.get('/', directoryController.getAllDirectory)



//N for New
//localhost:3000/workouts/new
// router.get('/new', directoryController.newDirectory)

// //D for DELETE
// //localhost:3000/workouts/myWorkout/:id
// router.delete('/:id', directoryController.deleteDirectory)
    
// //User.deleteOne({_id: req.params.id})
// //     .then(success => res.json('Success! User deleted.'))
// //     .catch(err => res.status(400).json('Error!' + err))
// // })


// //U for UPDATE
// //localhost:3000/workouts/update/:id
// router.put('/:id', directoryController.updateDirectory)




// //C for CREATE new workout
// //localhost:3000/workouts
// workoutsRouter.post('/', workoutsController.createWorkout)

// //E for EDIT 
// //localhost:3000/workouts/id/edit
// workoutsRouter.get("/:id/edit", workoutsController.editWorkout) 
    

// //S for show getOne
// //localhost:3000/workouts/:id
// workoutsRouter.get('/:id', workoutsController.showWorkout )




module.exports = router;