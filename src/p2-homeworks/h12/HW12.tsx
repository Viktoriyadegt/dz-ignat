import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

export type ThemeType = 'dark' | 'red' | 'some'
const themes = ['dark', 'red', 'some'];

function HW12() {
    //const theme = 'some'; // useSelector
    //const [value, onChangeOption] = useState(themes[1])
    const theme = useSelector<AppStoreType,ThemeType>(state => state.theme.theme)
    const dispatch = useDispatch()
    // useDispatch,
    const onChangeCallback = (theme:ThemeType) => {
        dispatch(changeThemeC(theme))
    }
debugger
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
