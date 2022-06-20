import {ThemeType} from "../HW12";
import {AppActionsType} from "../../h10/bll/store";

type InitStateType = typeof initState
const initState = {
    theme:  'some' as ThemeType
};

export const themeReducer = (state = initState, action: changeThemeCType): InitStateType  => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            debugger
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


export type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeType) => ({type: 'CHANGE_THEME', theme,} as const); // fix any