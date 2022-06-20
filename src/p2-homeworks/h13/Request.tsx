import React, { useState} from 'react';
import { useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import style from './Request.module.css'

type PropsType = {
    callback1: (success:boolean)=>void

}
const Request = (props:PropsType) => {
    const [checked, setChecked] = useState<boolean>(false)
    const errorT = useSelector<AppStoreType,string>(state => state.request.errorText)

    const callbackHandler = (checked:boolean)=>{
        props.callback1(checked)
    }

    return (
        <div>
            <div className={style.checked}>
                <SuperCheckbox type="checkbox" checked={checked}
                               onChange={(e)=>{setChecked(e.currentTarget.checked)}}  />
            </div>

            <div className={style.button}>
                <SuperButton onClick={()=>callbackHandler(checked)} >button</SuperButton>
            </div>
            <span className={style.answer}>ответ:  {errorT}</span>
        </div>

    );
};

export default Request;