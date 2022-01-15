import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SocioRama from '../Images/SocioRama.png'
import { useHistory } from 'react-router'
import Cookies from 'universal-cookie';
import { useState } from 'react'
import Button from './Button'
import '../Styles/signin.css';
// require('dotenv').config()
// import dotenv from 'dotenv'
// dotenv.config()

export default function Container(props) {
    const [Load,setLoad] = useState(false);
    const history = useHistory()
    // console.log(process.env.URL)
    const clickLogin = (event) =>{
        event.preventDefault();
        setLoad(true)
        const required = {
            email:event.target.Email.value,
            password:event.target.Password.value
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/`,required).then((res)=>
        {    
            setLoad(false)
            if(res.data.user){
                
                props.setUser(res.data.user);
                const token = new Cookies();
                token.set('token',res.data.token);
                history.push("/home"); 
                
            }
            else{
                alert(res.data.message);
            }
        })
    }
    return (
        <div className="flexSignin">
            <img id = "img" src={SocioRama} alt="Logo" width="150px" height="150px" />
            <div className="div1">
                <h2 className="head">SIGN IN</h2>

                <main>
                    <form onSubmit = {clickLogin}>
                        <input placeholder="Email ID" type="email" name="Email" /><br />
                        <input placeholder="Password" type="password" name="Password" /><br />
                        {Load?<Button Text = "Loading..." />:<Button Text = "SIGNIN" />}
                    </form>
                    <div className="do">Don't have account? <span><Link to="/signup">Sign Up</Link></span></div>

                </main>
            </div>
        </div>
    )
}
