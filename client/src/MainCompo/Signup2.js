import React from 'react'
import '../Styles/signup.css'
import Container from '../Component1/Container11.js'
import Footer from '../Component1/Footer'
import Heading from '../Component1/Heading'
export default function Signup2(props) {
    return (
        <div>
            <div className="flexContainer">
                <Heading title="SOCIORAMA"/>
                <Container state = {props.stateChange} ClickingSubmit = {props.ClickingSubmit} data= {props.data}/>
            </div>
            <Footer site="SocioRama.com"/>
        </div>
    )
}
