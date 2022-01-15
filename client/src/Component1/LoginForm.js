import React from 'react'
import { Link } from 'react-router-dom'
import SocioRama from '../Images/SocioRama.png'

export default function LoginForm(props) {
    return (
        <div className="flexSignin">
            <img src={SocioRama} alt="Logo" width="150px" height="150px" />
            <div className="div1">
                <h2 className="head">SIGN IN</h2>

                <main>
                    <form onSubmit = {props.clickLogin}>
                        <input placeholder="Email ID" type="email" name="Email" /><br />
                        <input placeholder="Password" type="password" name="Password" /><br />
                        <button type = "submit">SIGNIN</button>
                    </form>
                    <div className="do">Don't have account? <span><Link to="/signup">Sign Up</Link></span></div>

                </main>
            </div>
        </div>
    )
}
