import React from 'react'
import {PATH} from "./Routes1";

import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


function Header() {
    debugger
    return (
        <div className={s.header } >
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => `${s.link} ${isActive ? s.active : ""}`}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => `${s.link} ${isActive ? s.active : ""}`} >junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => `${s.link} ${isActive ? s.active : ""}`}>junior-plus</NavLink>

        </div>
    )
}

export default Header
