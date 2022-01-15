import React from 'react'
import '../Styles/signup.css'
import Container1 from '../Component1/Container1'
import Footer from '../Component1/Footer'
import Heading from '../Component1/Heading'

export default function Signup1(props) {
    return (
        <div>
            <div className="flexContainer">
                <Heading title="SOCIORAMA"/>
                <Container1 state = {props.state} Clicked = {props.Clicked} data = {props.data}/>
            </div>
            <Footer site="SocioRama.com"/>
        </div>
    )
}
