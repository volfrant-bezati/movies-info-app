import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
    return (
        <div>
           <img src={spinner} style={{width: '100px', margin: 'auto', display: 'block' }} alt= "loading..." />
        </div>
    )
}

export default Spinner
