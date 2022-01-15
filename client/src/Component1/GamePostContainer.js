import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import '../Styles/sports_feeds.css'
import Cookies from 'universal-cookie'
import LikeButton from './LikeButton'
import { Link } from 'react-router-dom'
import Comment from './Comment';
import SingleContainer from './SingleContainer';
const dotenv = require('dotenv')
dotenv.config()

export default function GamePostContainer(props) {
    const [posts, setposts] = useState()
    const [state,setState] = useState(false)
    // const [clickComment,setClick] = useState(true)
    const [liked,setLiked] = useState([]);
    // const [countLikes,setCountLikes] = useState({id:"x",like:0})
    const token = new Cookies();

    useEffect(()=>{
        const data = {token:token.get('token')}
        
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/check`,data).then((res)=>{
            setLiked(res.data.user);
            axios.get(`${process.env.REACT_APP_SERVER_URL}/app/g1`).then((res)=>{
                setposts(res.data.user);
                setState(true);
            }).catch((res)=>{console.log(res)})
        })
        
        
    },[posts])

    

    return (
        <div>

            <ul style = {{margin:"2vh 1vw",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                {state?posts.map((Item)=>(
            <div key = {Item._id} className="feeds" style = {{backgroundColor:"rgb(224, 220, 213)",borderRadius:"20px",display:"block",padding:"2vh 1vw",borderLeft:"7px",borderStyle:"solid",borderColor:"black",borderRight:"0",borderTop:"0",borderBottom:"0",margin:"1vh 1vw",width:"100vw",wordWrap:"break-word"}}><SingleContainer Item = {Item} liked = {liked}/></div>
                )):<p>No posts</p>}
            </ul>
        </div>
    )
}
