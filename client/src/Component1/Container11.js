import React from 'react'
import "../Styles/signup.css" 
import SocioRama from '../Images/SocioRama.png'  


export default function Container(props) {
    return (
        <div className = "flexSignup">
            <img id = "img" src={SocioRama} alt="Logo" width="150px" height="150px"/>
            <div className="signup-container">
                <main>
                    <form onSubmit = {props.ClickingSubmit}> 
                            <input type="text" placeholder = "Your Hobbies"  name = "Hobby"/><br/>
                            <input type="text" placeholder = "Interest" name = "Interest"/><br/>
                            <input type="date" placeholder = "Date of Birth" name = "DOB"  required/><br/>
                            <div><input type="checkbox" value = "checked" name="checkBox" id="checkbox" required/>I accept all the T&C's</div>
                            <div><button type="submit" className="button">Submit</button></div>
                    </form>
                </main>
            </div>
        </div>
    )
}