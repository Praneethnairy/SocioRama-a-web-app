import axios from 'axios';
import React from 'react'
import img from '../Images/userimg.jpg'
import Cookies from 'universal-cookie';
import '../Styles/profile.css'
import { useState,useEffect } from 'react';
const dotenv = require('dotenv');
dotenv.config()

export default function ProfileContainer() {
    const [user,setUser] = useState({});
    useEffect(()=>{
        const token = new Cookies()
        const data1 = {
            token:token.get('token')
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/profile`,data1).then((res)=>{
            setUser(res.data.user)
        })
    },[])
    return (
        <div id = "profile" style = {{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"4vh 17vw",borderRadius:"7px",padding:"2vh",backgroundColor:"rgb(224, 220, 213)",flexWrap:"wrap"}}>
            <img src={img} alt="User" style = {{width :"200px",height:"220px",borderRadius:"7px"}}/>
            <div style = {{alignSelf:"flex-start"}}>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Name:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.name}</div></p>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Email:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.email}</div></p>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Contact:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.contact}</div></p>
            </div>
        </div>
    )
}
