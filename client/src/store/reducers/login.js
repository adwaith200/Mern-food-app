import * as actionTypes from '../actions/actionTypes';

const initialState={
    token:null,
    userid:null,
    loading:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.LOGIN_SUCCESS:
            // console.log(action.token,'reducer token');
            return {
                ...state,
                loading:false,
                token:action.token,
                userid:action.userid
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading:false
            }
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.LOGOUT:{
            return {
                ...state,
                loading:false,
                token:null,
                userid:null
            }
        }
        default:return state;
    }
}   

export default reducer;