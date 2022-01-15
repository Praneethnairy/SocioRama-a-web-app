import React from 'react'
import img1 from '../Images/praneeth.jpeg'
import img2 from '../Images/pranav.jpeg'
import img3 from '../Images/nihal.jpeg'
import '../Styles/aboutcss.css'
export default function AboutContainer(props) {
    return (
        <>
        <h1 style = {{padding:"2vh 7vw",fontFamily:"'Roboto Mono', monospace"}}>Developed By:</h1>
        <div style = {{display:"flex",justifyContent:"center",padding:"2vh 2vw",flexWrap:"wrap"}}>
            <div id = "about" style = {{textAlign:"center",backgroundColor:"rgb(224, 220, 213)",padding:"2vh 2vw",borderRadius:"10px",margin:"2vh 2vw",wordWrap:"wrap"}}>
                <img src={img1} alt="Praneeth" style = {{borderRadius:"10px",width:"280px",height:"230px"}}/><br />
                <h2 style = {{padding:"2vh 0 1vh 0",fontFamily:"'Inconsolata', monospace"}}>Praneeth P Nairy</h2>
                <p style = {{fontFamily:"'Open Sans Condensed', sans-serif"}}>Contact: praneethnairy@gmail.com</p>
            </div> 
            <div id = "about" style = {{textAlign:"center",backgroundColor:"rgb(224, 220, 213)",padding:"2vh 2vw",borderRadius:"10px",margin:"2vh 2vw",wordWrap:"wrap"}}>
                <img src={img2} alt="Pranav" style = {{borderRadius:"10px",width:"280px",height:"230px"}}/><br />
                <h2 style = {{padding:"2vh 0 1vh 0",fontFamily:"'Inconsolata', monospace"}}>Pranav Kalwad</h2>
                <p style = {{fontFamily:"'Open Sans Condensed', sans-serif"}}>Contact: pranavkalwad@gmail.com</p>
            </div> 
            <div id = "about" style = {{textAlign:"center",backgroundColor:"rgb(224, 220, 213)",padding:"2vh 2vw",borderRadius:"10px",margin:"2vh 2vw",wordWrap:"wrap"}}>
                <img src={img3} alt="Nihal" style = {{borderRadius:"10px",width:"280px",height:"230px"}}/><br />
                <h2 style = {{padding:"2vh 0 1vh 0",fontFamily:"'Inconsolata', monospace"}}>Nihal Pattanshetty</h2>
                <p style = {{fontFamily:"'Open Sans Condensed', sans-serif"}}>Contact: nihalpattanshetty1@gmail.com</p>
            </div> 
        </div>
        </>
    )
}
