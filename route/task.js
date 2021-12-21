const express = require('express')

const route = express.Router();


const {
    getAllTask , 
    getTask,
    createTask,
    updateTask,
    deleteTask
}
     = 
require('../controller/taskController')


route.get('/' ,getAllTask)
route.get('/:id',getTask)
route.post('/' ,createTask)
route.patch('/:id' ,updateTask)
route.delete('/:id' ,deleteTask)


module.exports = route
