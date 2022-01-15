import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import '../Styles/homepage.css'
import { useHistory } from 'react-router'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'
const dotenv = require('dotenv');
dotenv.config()

export default function HomeHeading(props) {
    const history = useHistory();
    const [name,setName] = useState("")
    const remTok = () =>{
        const token = new Cookies();
        token.remove('token');
        history.push('/');
        window.location.reload();
    }
    const token = new Cookies();
    useEffect(()=>{
        const data = {
            token:token.get('token')
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/head`,data).then((res)=>{
            setName("Hello,"+res.data.user);
        })
    },[])
    return (
        <nav>
            <div id="ul">
                <div>
                <div className = "headings"><img src="favicon.ico" className="image" alt="Logo" width="50" height="50"/>
                <Link to="/home" style={{color: "black"}}><h1 className="heading">{props.title}</h1></Link></div>
                
                </div>
                <div>
                    <ul>
                        <li><Link to="/home" className="home" style={{textDecoration: "none"}}>HOME</Link></li>
                        <li><Link to="/profile" className="contact-us" style={{textDecoration: "none"}}>PROFILE</Link></li>
                        <li><Link to="/about1" className="about-us" style={{textDecoration: "none"}}>ABOUT US</Link></li>
                        <li><Link to="/settings" className="settings" style={{textDecoration: "none"}}>SETTINGS</Link></li>
                    </ul>
                </div>
            </div>
            <div id = "sec" style = {{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h2 style = {{color:"white",padding:"0 0 0 2.3vw",fontFamily:"'Raleway', sans-serif"}}>{name}</h2>
                <div className="logout"><button onClick = {remTok} className = "button">Logout</button></div>
            </div>
    </nav>
    )
}
