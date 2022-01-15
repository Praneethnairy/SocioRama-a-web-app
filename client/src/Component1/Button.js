import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button type="submit" className="button">{props.Text}</button>
        </div>
    )
}
