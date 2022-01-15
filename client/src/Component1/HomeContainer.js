import React from 'react'
import '../Styles/homepage.css'
import sports from '../Images/sports.jpg'
import movies from '../Images/movies.jpg'
import edu from '../Images/edu.jpg'
import { Link } from 'react-router-dom'

export default function HomeContainer(props) {
    return (
        <main className = "Mainflex">
        <Link to = "/games" style = {{color:"black",textDecoration:"none"}}>
        <div className="flex" style = {{textAlign:"center"}}>
            <div className="card">
                <img className = "img" src={sports} alt="Sports" style={{width: "260px", height:"300px"}}/>
                <div className="container-head">
                <h4 style = {{color:"black",textDecoration:"none"}}>{props.sports}</h4>
                </div>
            </div>
            <div className="content">
                <div className="inside-content">
                    <h1 className="welcome" style = {{color:"black",textDecoration:"none"}}>Hey,</h1>
                    <div className="seperator">
                    <p className="space" style = {{color:"black",textDecoration:"none"}}>Welcome to the SocioRama sports section.</p>
                    <p className="space" style = {{color:"black",textDecoration:"none"}}>Stay updated with the latest sports content.</p>
                    </div>
                    <p><Link to="/games" className="link" style={{textDecoration: "none", color:"black"}}><i>Click here to follow feeds</i></Link></p>
                </div>
            </div>
        </div>
        </Link>

        <Link to = "#" style = {{color:"black",textDecoration:"none"}}>
        <div className="flex" style = {{textAlign:"center"}}>
            <div className="card">
                <img className = "img" src={movies} alt="Movies" style={{width: "260px", height:"300px"}}/>
                <div className="container-head">
                <h4>{props.movies}</h4>
                </div>
            </div>
            <div className="content">
                <div className="inside-content1">
                    <h1 className="welcome">Hey,</h1>
                    <div className="seperator">
                    <p className="space">Welcome to the SocioRama movies section.</p>
                    <p className="space">Stay updated with the latest movies content.</p>
                    </div>
                    <p><Link to="#" className="link" style={{textDecoration: "none", color:"black"}}><i>Click here to follow feeds</i></Link></p>
                </div>
            </div>
        </div>
        </Link>

        <Link to = "#" style = {{color:"black",textDecoration:"none"}}>
        <div className="flex" style = {{textAlign:"center"}}>
            <div className="card" >
                <img className = "img" src={edu} alt="Education" style={{width: "260px", height:"300px"}}/>
                <div className="container-head">
                <h4>{props.edu}</h4>
                </div>
            </div>

            <div className="content">
                <div className="inside-content2">
                    <h1 className="welcome">Hey,</h1>
                    <div className="seperator">
                    <p className="space">Welcome to the SocioRama education section.</p>
                    <p className="space">Stay updated with the latest education content.</p>
                    </div>
                    <p><Link to="#" className="link" style={{textDecoration: "none", color:"black"}}><i>Click here to follow feeds</i></Link></p>
                </div>
            </div>
        </div>
        </Link>
        </main>
    )
}
