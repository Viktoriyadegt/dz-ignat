import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    debugger
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={"avatar"} className={s.avatar}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <p className={s.name}>{props.name}</p>
                <p className={s.text}>{props.message}</p>
                <p className={s.time}>{props.time}</p>

            </div>
        </div>
   )
}
export default Message;
