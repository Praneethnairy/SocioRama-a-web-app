const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModels')
const gamePosts = require('../models/gamePosts');


router.post('/signup',(req,res)=>{
    signUpTemplateCopy.findOne({email: req.body.email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
        else{
            const signedUpUser = new signUpTemplateCopy({
                name:req.body.name,
                email:req.body.email,
                contact: req.body.contact,
                password:req.body.password,
                hobby:req.body.hobby,
                interest:req.body.interest,
                dob:req.body.dob,
                mode:req.body.mode
            })
            console.log(req.body)
            signedUpUser.save().then((data)=>res.json(data)).catch(error=>{res.json(error)})
        }
    })
    
})

router.post('/', (req,res)=>{
    let token;
    signUpTemplateCopy.findOne({email:req.body.email},async (err,user)=>{
        if(user){
            if(req.body.password === user.password){
                
                token = await user.generateAuthToken();
                // console.log(token);
                // res.cookie('jwtoken',token,{httpOnly:true})

                res.send({message:"Login successfull",user:user,token})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }
        else{
            res.send({message:"User not registered!!"})
        }
    })
})

router.post('/game',(req,res)=>{
    signUpTemplateCopy.findOne({tokens:{$elemMatch:{token:req.body.token}}},(err,user)=>{
        if(user){
            const games = new gamePosts({
                name:user.name,
                messagePost:req.body.messagePost,
                color:"white",
                numberComments:0,
                like:0,
                token:req.body.token
            })
            // console.log(req.body)
            games.save().then((data)=>res.json(data)).catch((err)=>res.json(err))
        }
        else{
            console.log("Not found")
        }
    })
    
})

router.get('/g1',(req,res)=>{

    gamePosts.find().sort({"Date":-1}).then(async (user)=>{
        
            // console.log(user)
            res.send({mes:"Posts sent",user:user});
    })

})

router.post('/head',(req,res)=>{
    signUpTemplateCopy.findOne({tokens:{$elemMatch:{token:req.body.token}}},(err,data)=>{
        if(data){
            res.send({user:data.name})
        }
    })
})

router.post('/like',(req,res)=>{
    console.log(req.body)
    signUpTemplateCopy.updateOne({tokens:{$elemMatch:{token:req.body.token}}},{$push:{liked:{id:req.body.id,$position:0}}}).then((data)=>{
        console.log("Success");
        res.send({message:"Success"})
    })
})

router.post('/unlike',(req,res)=>{
    signUpTemplateCopy.updateOne({tokens:{$elemMatch:{token:req.body.token}}},{$pull:{liked:{id:req.body.id}}}).then((data)=>{
        console.log(data)
        // if(err) throw err;
        res.send({message:"Unliked"})
    })
})

router.post('/check',(req,res)=>{
    signUpTemplateCopy.findOne({tokens:{$elemMatch:{token:req.body.token}}},(err,data)=>{
        if(err) throw err;
        res.send({user:data.liked})
    })
})

router.post('/profile',(req,res)=>{
    signUpTemplateCopy.findOne({tokens:{$elemMatch:{token:req.body.token}}},(err,data)=>{
        if(err) throw err;
        res.send({user:data});
    })
})

router.post('/check1',(req,res)=>{
    
    signUpTemplateCopy.findOne({tokens:{$elemMatch:{token:req.body.tokens}}}).then((user)=>{
        console.log(user.password,req.body)
        if(req.body.curr === user.password){
            if(req.body.new != user.password){
                signUpTemplateCopy.updateOne({tokens:{$elemMatch:{token:req.body.tokens}}},{$set:{password:req.body.new}},(err,data)=>{
                    if(err) throw err;
                    res.send({message:"Successfully Changed Password"})
                })
            }
            else if(req.body.new === user.password)
            {
                res.send({message:"Previous Password Matches the Already Existing One"})
            }
        }
        else{
            res.send({message:"Invalid Current Password"})
        }
    })
})

router.post('/getcomment',(req,res)=>{
    gamePosts.findOne({_id:req.body.id},(err,user)=>{
        if(err) throw err;
        res.send({message:"Success",comment:user.Comments})
    })
})

router.post('/liked',(req,res)=>{
    gamePosts.updateOne({_id:req.body.id},{$set:{like:req.body.like}}).then((user)=>{
        res.send({message:"Success"});
    })
})
router.post('/unliked',(req,res)=>{
    gamePosts.updateOne({_id:req.body.id},{$set:{like:req.body.like}}).then((user)=>{
        res.send({message:"Success"});
    })
})

router.post('/postcomment',(req,res)=>{
    gamePosts.updateOne({_id:req.body.id},{$push:{Comments:{user:req.body.name,comment:req.body.comment}},$set:{numberComments:req.body.Comments}}).then((user)=>{
        res.send({message:"Success"})
    })
})

// router.post('/commentInc',(req,res)=>{
//     gamePosts.updateOne({_id:req.body.id},{$set:{numberComments:req.body.Comments}}).then((user)=>{
//         res.send({message:"Success"})
//     })
// })

module.exports = router