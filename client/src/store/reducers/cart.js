import * as actionTypes from '../actions/actionTypes';

const initialState={
    loading:false,
    cart:[],
    total:0
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.ADDTOCART:
            let mytotal=state.total;
            return {
            ...state,
            cart:state.cart.concat(action.cartitem),
            total:mytotal+action.cartitem.price
        }
        case actionTypes.ADDCARTLOADING:
            return {
                ...state,
                loading:true
            }
        case actionTypes.FETCHCART:
            let mytotals=0;
            let mytotalarr=action.cartitems.map(el=>el.price+mytotals);
            let mytotalsforarr=0;
            mytotalarr.forEach(el=>{
                mytotalsforarr=mytotalsforarr+el
            });
            return {
                ...state,
                cart:action.cartitems,
                total:mytotalsforarr,
                loading:false
            }
        case actionTypes.DELETEFROMCART:
            const cartindex=state.cart.findIndex(el=>el.fooddata._id===action.id);
            const mycart=[...state.cart];
            const myprice=mycart[0].price;
            const mytotalforcart=state.total;
            mycart.splice(cartindex,1);
            return {
                ...state,
                cart:mycart,
                total:mytotalforcart-myprice
            };
        default:return state;
    }
}

export default reducer;