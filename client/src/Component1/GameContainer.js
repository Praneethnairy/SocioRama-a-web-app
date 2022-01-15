import React, { useState } from 'react'
import Post from './Post'
import AskToPost from './AskToPost'
import $ from 'jquery'
import GamePostContainer from './GamePostContainer'

export default function GameContainer() {

    const [showPost,setPost] = useState(false)
    const [button,setButton] = useState(true)
    const clickEvent = (event) =>{
        event.preventDefault();
        setPost(true);
        setButton(false);
    }
    if(showPost === false && button === true){
        $('#postbox').hide();
        $('#sticky').show();
    }
    else{
        $('#postbox').show();
        $('#sticky').hide();
    }

    const back = (event) =>{
        event.preventDefault();
        setPost(false);
        setButton(true);
    }

    return (
        <div>
            <div id="postbox">
                {showPost?<AskToPost back = {back} setPost = {setPost} setButton = {setButton}/>:$('postbox').hide()}
            </div>
            <div id="sticky">
                <div id="postContainer"style = {{margin:"0 0 12vh"}}><GamePostContainer showPost = {showPost} button = {button}/></div>
                <div style = {{display:"flex",justifyContent:"center"}}>
                    <div  style = {{position:"fixed",bottom:"0",zIndex:"1"}}>
                        <Post clickEvent = {clickEvent}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
