import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useEffect,useState } from 'react'
export default function PostAComment({Item:Item,setClick:setClick}) {
    const [commented,setCommented] = useState([])
    const [state,setState] = useState(false);
    // const [countInc,setInc] = useState(0);
    const token = new Cookies();
    useEffect(()=>{
        const required = {
            id:Item._id
        }
        
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/getcomment`,required).then((res)=>{
            // console.log(res.data.comment);
            setCommented(res.data.comment);
            setState(true);
            console.log(commented);
        })
    
    },[state])
    const commentedPost =(e)=>{
        e.preventDefault();
        const required = {
            token:token.get('token')
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/head`,required).then((res)=>{
            // setUser(res.data.user);
            // console.log(countInc);
        const data = {
            id : Item._id,
            name : res.data.user,
            comment: e.target.commentSection.value,
            Comments: commented.length+1
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/postcomment`,data).then((res)=>{
            console.log("Success");
            // setInc(0);
            setState(false);
        })
    })

    }

    return (
        <div>
            <div style ={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h1 style = {{fontFamily: "'Island Moments', cursive",fontSize:"xxx-large"}}>Comments</h1>
            <button style = {{borderRadius:"200px",padding:"3px",backgroundColor:"red"}} onClick={()=>{
                        setClick(true)
                    }}><h1 style={{color:"white"}}>&#8592;</h1></button>
            </div>
            <div>
                {state?commented.map((Com)=>(
                    <div key = {Com._id} style = {{backgroundColor:"rgb(228, 213, 192)",margin:"30px 0",padding:"10px 8px",borderRadius:"10px",boxSizing:"content-box"}}>
                        <h4 style={{margin:"0 0 10px 0"}}>{Com.user}</h4>
                        <div><pre style={{fontFamily: "'Dongle', sans-serif",fontSize:"x-large"}}>{Com.comment}</pre></div>
                    </div>
                )):<p>Loading...</p>}
                <div style={{margin:"20px 0 0 0"}}>
                    <form style={{display:"flex",alignItems:"center",justifyContent:"center"}} onSubmit = {commentedPost}>
                        <textarea style={{padding:"5px",borderRadius:"10px"}} name="commentSection" id="commentSection" placeholder='Type your comment here...' cols="30" rows="1"></textarea>
                        <button style={{padding:"5px",margin:"0 0 0 5px",borderRadius:"10px"}} type = "submit">Post Comment</button>
                    </form><br />
                    
                </div>
            </div>
        </div>
    )
}
