// write a code for Add feature which counts how many time button pressed.


import React, { useState } from 'react'


const Namechange = () => {

    const [name, setName] = useState('Dhruv')
    const handleClick = () => {

        if(name === 'Dhruv'){
            setName('Daherawala');
        }else{
            setName('Dhruv');
        }
    }

  return (
    <div>{name}  
    <button onClick={handleClick} >Click</button></div>
  )
}

export default Namechange