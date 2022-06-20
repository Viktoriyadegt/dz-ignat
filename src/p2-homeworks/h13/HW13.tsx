import React from "react";
import Request from "./Request";
import {requestTC} from "./requestReducer";
import {useAppDispatch} from "./hooks/hooks";


function HW13() {
    //const dispatch = useDispatch()
    const dispatch = useAppDispatch()

    const onChangeCallbackSuccess = (success: boolean) => {
        dispatch(requestTC(success))
    }
    return <div>
        <hr/>
        homeworks 13
        <Request callback1={onChangeCallbackSuccess}/>;
    </div>

}

export default HW13;
