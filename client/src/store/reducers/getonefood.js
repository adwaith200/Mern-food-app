import * as actionTypes from '../actions/actionTypes';

const initialState={
    food:{},
    loading:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.GETFOOD:return {
            ...state,
            loading:true
        }
        case actionTypes.GETFOODSUCCESS:return {
            ...state,
            food:action.food,
            loading:false
        }
        case actionTypes.GETFOODFAIL:return {
            ...state,
            loading:false
        }
        default:return state
    }
}

export default reducer;