import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Cookies from 'universal-cookie' 
const dotenv = require('dotenv')
dotenv.config()

export default function LikeButton({Item:Item,liked:liked},...props) {
    const [buttonStyle,setStyle] = useState({color:"black",fontSize:"x-large"})
    const [like,setLike] = useState(false)
    const [count,setCount] = useState(Item.like)
    const token = new Cookies()
    useEffect(()=>{
        for (const key in liked) {
            // console.log(liked[key])
            if(liked[key].id === Item._id){
                setStyle({color:"red",fontSize:"x-large"})
                setLike(true)
                break;
            }    
        }
    },[])
    const Liked = (id,token) =>{
        
        if(!like){
            axios.post(`${process.env.REACT_APP_SERVER_URL}/app/like`,{
                id:id,
                token:token
            }).then((res)=>{
                setStyle({color:"red",fontSize:"x-large"})
                axios.post(`${process.env.REACT_APP_SERVER_URL}/app/liked`,{id:Item._id,like:Item.like+1}).then((res)=>{console.log("Success")}) 
                setLike(true)
            })
        }
        else{
            // const data = {
            //     id:id,
            //     token:token,
            //     like:Item.like-1
            // }
            axios.post(`${process.env.REACT_APP_SERVER_URL}/app/unlike`,{
                id:id,
                token:token
            }).then((res)=>{
                setStyle({color:"black",fontSize:"x-large"})
                axios.post(`${process.env.REACT_APP_SERVER_URL}/app/unliked`,{id:Item._id,like:Item.like-1}).then((res)=>{console.log("Success")})
                setLike(false)
            })
        }
    }
    return (
        <div style={{textAlign:"center"}}>
            <button onClick = {(e)=>{e.preventDefault();
             Liked(Item._id,token.get('token'))}} id="like-icon" style = {{border:"0",backgroundColor:"rgb(228, 213, 192)",margin:"0 0 10px 0"}}><i className="fas fa-thumbs-up" style={buttonStyle}></i></button>
            <br />
            <span style={{fontFamily:"'Source Sans Pro', sans-serif"}}>{Item.like}</span>
        </div>
    )
}
