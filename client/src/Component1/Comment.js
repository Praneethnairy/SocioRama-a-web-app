import React from 'react'


export default function Comment(props) {
    const comment = (id)=>{
        props.setClick(false)
    }
    return (
        <div style = {{textAlign:"center"}}>
            <button onClick = {()=>{
                comment(props.Item._id)
            }} style = {{border:"0",backgroundColor:"rgb(228, 213, 192)",margin:"0 0 10px 0"}}><i className="fas fa-comment"style={{color:"black",fontSize:"x-large"}}></i></button>
            <br />
            <span style={{fontFamily:"'Source Sans Pro', sans-serif"}}>{props.Item.numberComments}</span>
        </div>
    )
}
