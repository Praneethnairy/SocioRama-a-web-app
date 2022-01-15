import React from 'react'

export default function Heading(props) {
    return (
            <div className="image1" style = {{wordWrap:"break-word"}}>
                <h1 className ="big_header" style = {{fontSize:"56px"}}>{props.title}</h1>
            </div>
    )
}
