const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const signUpTemplate = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:String,
    },
    password:{
        type:String,
    },
    hobby:{
        type:String
    },
    interest:{
        type:String
    },
    dob:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    mode:{
        background:{
            type:String
        },
        color:{
            type:String
        }
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    liked:[
        {
            id:{
                type:String
            }
        }
    ]
    
})

signUpTemplate.methods.generateAuthToken = async function(){
    
        let tokenCreate = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:tokenCreate})
        await this.save()
        return tokenCreate;
    
}

module.exports = mongoose.model('signupPage1',signUpTemplate)