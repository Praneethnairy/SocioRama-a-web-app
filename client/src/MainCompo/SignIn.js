import '../Styles/signin.css';
import React from 'react'
import Heading from '../Component1/Heading';
import Container from '../Component1/Container';
import Footer from '../Component1/Footer';

function SignIn(props) {
    return (
        <div>
            <div className="flexContainer" style = {{wordWrap:"wrap"}}>
                <Heading title="SOCIORAMA" />
                <Container setUser = {props.setUser} setAuth = {props.setAuth} setname = {props.setname}/>
            </div>  
            <Footer site="SocioRama.com" />
        </div>
    )
}

export default SignIn;