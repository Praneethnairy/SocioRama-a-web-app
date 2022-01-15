const mongoose = require('mongoose')

const gamePosts = new mongoose.Schema({
    name:{
        type:String
    },
    messagePost:{
        type:String,
        required:true
    },
    color:{
        type:String
    },
    numberComments:{
        type:Number
    },
    like:{
        type:Number
    },
    Comments:[
        {
            user:{
                type:String
            },
            comment:{
                type:String
            }
        }
    ],
    token:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('gameposts',gamePosts);