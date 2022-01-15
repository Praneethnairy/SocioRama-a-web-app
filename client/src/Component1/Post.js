import React from 'react'

export default function Post({clickEvent:clickEvent,...props}) {
    return (
        <div>
            <button onClick = {clickEvent} className = "button">Post</button>
        </div>
    )
}
