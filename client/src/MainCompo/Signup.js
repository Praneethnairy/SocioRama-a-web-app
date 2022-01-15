import React from 'react'
import '../Styles/signup.css'
import axios from 'axios'
import Signup1 from './Signup1'
import Signup2 from './Signup2'
import { useState } from 'react'
import { useHistory } from 'react-router'
const dotenv = require('dotenv')
dotenv.config()

export default function Signup() {
    const [state1,setState1] = useState(true);
    const history = useHistory()
    const [data,changeData] = useState({name:"",email:"",contact:"",password:"",confpassword:""})
    const stateChange = (val) =>{
        setState1(val)

    }

    
    const Clicked = (event)=>{
        event.preventDefault();
        changeData({name:event.target.signupFirstName.value,
            email:event.target.signupEmail.value,
            contact:event.target.signupContact.value,
            password:event.target.signupPass.value,
            confpassword:event.target.signuppassConfirm.value,})
        
        setState1(false);
    }
    var name = data.name;
    var email = data.email;
    var contact = data.contact;
    var password = data.password;
    var confpassword = data.confpassword;


    

    const ClickingSubmit = (event) =>{
        event.preventDefault();
        changeData({name:name,
            email:email,
            contact:contact,
            password:password,
            confpassword:confpassword
        })
        if(data.password === data.confpassword){
            const registered = {
                name:data.name,
                email:data.email,
                contact:data.contact,
                password:data.password,
                hobby:event.target.Hobby.value,
                interest:event.target.Interest.value,
                dob:event.target.DOB.value,
                mode:{background:"white",color:"black"}   
            }
            axios.post(`${process.env.REACT_APP_SERVER_URL}/app/signup`,registered).then(()=>{history.push("/signin")})
        }
        else{
            alert("Password and Confirm password field didnot Match");
            setState1(true)
        }

    }
    return (
        <>
        <div style = {{margin:"0 2vw"}}>
            {state1?<Signup1 state = {stateChange} Clicked = {Clicked} data = {data}/>:<Signup2 state = {stateChange} ClickingSubmit = {ClickingSubmit} data= {data}/>}
        </div>
        </>
    )
}
