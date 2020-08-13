import * as actionTypes from '../actions/actionTypes';

const initialState={
    orders:[],
    loading:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.ADDORDERSLOADING:
            return {
                ...state,
                loading:true
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading:false
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders:action.orderdata,
                loading:false
            };
        case actionTypes.ADDORDERSSUCCESS:
            return state;
        default:return state;
    }
}

export default reducer;