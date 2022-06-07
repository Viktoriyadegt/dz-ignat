import {ThemeType} from "../HW12";

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


type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeType) => ({type: 'CHANGE_THEME', theme,} as const); // fix any