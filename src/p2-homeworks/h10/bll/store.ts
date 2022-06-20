import { applyMiddleware, combineReducers, createStore} from 'redux'
import {LoadingACType, loadingReducer} from './loadingReducer'
import {changeThemeCType, themeReducer} from "../../h12/bll/themeReducer";
import {ActionsType, requestReducer} from "../../h13/requestReducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer

})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof store.getState>

export type AppActionsType = LoadingACType | changeThemeCType | ActionsType

export type AppDispatch = ThunkDispatch<AppStoreType, unknown,AppActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>


//export type RootStoreType = ReturnType<typeof store.getState>
//export type AppDispatchType = typeof store.dispatch



// @ts-ignore
window.store = store // for dev
