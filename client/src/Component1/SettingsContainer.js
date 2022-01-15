import React from 'react'
import $ from 'jquery'
import { useState,useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import PassContainer from './PassContainer';
const dotenv = require('dotenv');
dotenv.config()

export default function SettingsContainer() {
    const [val,setVal] = useState(false);
    const [curr,setCurr] = useState("")
    const [new1,setNew] = useState("")
    const token = new Cookies()

    // useEffect(()=>{
    // if(val === true){
    //     $('#settContain').hide()
    //     $('#currContain').show()
    // }
    // else{
    //     $('#currContain').hide()
    //     $('#settContain').show()
    // }
    // },)
    const changeState = (e) =>{
        e.preventDefault()
        $('#settContain').hide()
        $('#currContain').show()
        setVal(true);
    }

    const changePass = (e) =>{
        e.preventDefault()
        
        const data1={
            tokens:token.get('token'),
            curr:e.target.curr.value,
            new : e.target.new.value
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/app/check1`,data1).then((res)=>{
            // console.log(res.data)
            $('#currContain').hide()
            $('#settContain').show()
            alert(res.data.message);


        })
    }
    const Back = (e) =>{
        e.preventDefault();
        $('#currContain').hide()
        $('#settContain').show()
        setVal(false);
    }
    return (
        
        <div style = {{textAlign:"center",backgroundColor:"rgb(224, 220, 213)",margin:"4vh 20vw",borderRadius:"7px",padding:"3vh 0"}}>
            <div id = "settContain">
            
                <h1 style = {{fontFamily:"'Inconsolata', monospace"}}>CHANGE PASSWORD</h1>
                <p style = {{margin :"2vh 2vw"}}>Click On the button to change Password</p><button className = "button" onClick = {changeState}>Change Password</button>
        
            </div>
            <div id = "currContain" style = {{backgroundColor:"rgb(224, 220, 213)"}}>
                {val === true?<PassContainer changePass = {changePass} Back = {Back}/>:()=>{$('#currContain').hide();$('#settContain').show()}}
                
                
            </div>
        </div>
    )
}
