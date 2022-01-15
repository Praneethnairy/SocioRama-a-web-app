import React from 'react'
import LikeButton from './LikeButton'
// import { Link } from 'react-router-dom'
import Comment from './Comment';
import { useState } from 'react';
import PostAComment from './PostAComment';
export default function SingleContainer({Item:Item,liked:liked}) {
    const [clickComment,setClick] = useState(true)

    return (
        <div key = {Item._id} >
            {clickComment?(<div>
            <div className="feeds-like">
            </div>
            <div className="main-feed">
            <h1 style = {{margin:"0 0 0 0",fontFamily:"'Open Sans', sans-serif"}}>{Item.name}</h1><br/>
            <div style={{backgroundColor:"rgb(228, 213, 192)",borderRadius:"20px",padding:"2vh 1vw"}}><pre style = {{margin:"0 0 0 0",fontFamily:"'Source Sans Pro', sans-serif"}}>{Item.messagePost}</pre>
            </div>
            </div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div className="icons">
                    <LikeButton Item = {Item} liked = {liked}/>
                </div>
                <div className='icons'>
                    <Comment Item = {Item} clickComment = {clickComment} setClick = {setClick}/>
                </div>
            </div>
            </div>):<PostAComment Item = {Item} setClick = {setClick}/>}
            </div>)
}
