// write a code for Add feature which counts how many time button pressed.

import React, { useState } from 'react'

const Namechange = () => {
    const [name, setName] = useState('Dhruv')
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
        if(name === 'Dhruv'){
            setName('Daherawala');
        }else{
            setName('Dhruv');
        }
    }
  return (
    <div>{name}  
    <button onClick={handleClick} >Click</button>
    <p>{count}</p>
    </div>
  )
}

export default Namechange