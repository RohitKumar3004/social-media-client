import React from 'react'
import userImg from "../../assets/user.png"
import "./Avtar.scss"

function Avtar({src}) {
  return (
      <div className='Avtar'>
    <img src={src ? src:userImg} alt="user avtar" />          
    </div>
  )
}

export default Avtar