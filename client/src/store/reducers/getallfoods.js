import * as actionTypes from '../actions/actionTypes';
const initialState={
    foods:[],
    loading:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.GETALLFOODS:return {
            ...state,
            loading:true
        }
        case actionTypes.GETALLFOODSSUCCESS:return {
            ...state,
            foods:action.foods,
            loading:false
        }
        case actionTypes.GETALLFOODSFAIL:return {
            ...state,
            loading:false
        }
        default:return state;
    }
}
export default reducer;