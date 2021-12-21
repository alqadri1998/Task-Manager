const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

    name:{
        type:String ,
        required:[true,"must provide name"],
        tirm:true,
        maxlength:[20,'must be less than 20 ']
    } ,
    completed:{
        type:Boolean,
        default:false
    }

})
module.exports = mongoose.model('Task',TaskSchema);
