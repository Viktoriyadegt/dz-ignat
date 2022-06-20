import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, AppStoreType} from "../../h10/bll/store";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector