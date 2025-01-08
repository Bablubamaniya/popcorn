// import React from 'react'
import style from "../styles/Message.module.css"
// import Emoji from "./Emoji"

function Message({children}) {
  return (
    <p className={style.Message}>
        {children}
        
    </p>
  )
}

export default Message