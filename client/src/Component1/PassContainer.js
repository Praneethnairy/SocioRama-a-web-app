import React from 'react'

export default function PassContainer(props) {
    
    return (
        <>
        <div style = {{display:"flex",justifyContent:"right"}}><button onClick = {props.Back} style = {{margin:"0 1vw",padding:"0.5vw",borderRadius:"100px",backgroundColor:"red",color:"white"}}>X</button></div>
        <div>
            <form onSubmit = {props.changePass}>
            <input type = "text" placeholder = "Enter Current Password" name = "curr"/> <br />
            <input type = "text" placeholder = "Enter New Password" name = "new"/><br/>
            <button className = "button" type = "submit" style = {{width :"15vw"}} >Change Password</button>
            
            </form>
        </div>
        </>
    )
}
