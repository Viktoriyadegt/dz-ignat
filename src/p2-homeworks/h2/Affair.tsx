import React from 'react'
import {AffairType, defaultAffairs} from "./HW2";
import affairs from "./Affairs";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) =>void // need to fix any
}

export function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
            <div className={s.item}> {props.affair.name}</div>
            <div className={s.item}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.item  + ' ' + s.button}>X</button>
        </div>
    )
}

