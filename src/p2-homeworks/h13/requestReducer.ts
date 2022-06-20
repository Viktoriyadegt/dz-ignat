import {requestApi, ResponseType} from "./request-api";
import { AppThunk} from "../h10/bll/store";

export type ActionsType = changeSuccessType | answerChangeType

type InitStateType = typeof initState;
const initState = {
    body : {success:  false },
    errorText: ''
};

export const requestReducer = (state = initState, action: ActionsType): InitStateType  => {
    switch (action.type) {
        case "SUCCESS_CHANGE": {
            return {...state, body: action.success};
        }
        case "ANSWER_CHANGE": {
            return {...state, errorText: action.errorText}
        }
        default:
            return state;
    }
};


type changeSuccessType = ReturnType<typeof successChange>;
type answerChangeType = ReturnType<typeof answerChange>;

export const successChange = (success: ResponseType) => ({type: 'SUCCESS_CHANGE', success,} as const);
export const answerChange = (errorText: string) => ({type: 'ANSWER_CHANGE', errorText,} as const);


export const _requestTC = (success:boolean):AppThunk => async dispatch=> {
      try {
          const res = await requestApi.createRequest(success)
          console.log(res.data.errorText)
          dispatch(successChange(res.data))
          dispatch(answerChange(res.data.errorText))
      } catch (error:any) {
          console.log({...error});
          console.log(error.response ? error.response.data.errorText : error.message);
          dispatch(answerChange(error.response ? error.response.data.errorText : error.message))
      }
}

export const requestTC = (success:boolean):AppThunk => {
    return (dispatch)=> {
        requestApi.createRequest(success )
            .then((res) => {
                console.log(res.data.errorText)
                dispatch(successChange(res.data))
                dispatch(answerChange(res.data.errorText))
            })
            .catch (error=> {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                dispatch(answerChange(error.response ? error.response.data.errorText : error.message))
            })
    }
}
