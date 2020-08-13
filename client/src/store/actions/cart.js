import * as actionTypes from './actionTypes';
import axios from '../../axiosbackend';

export const addtocart=(data)=>{
    return {
        type:actionTypes.ADDTOCART,
        cartitem:data
    }
}

export const carterror=()=>{
    return {
        type:actionTypes.CARTERROR
    }
}

export const additems=(id,token)=>{
    return async dispatch=>{
        try{
            const cartdata=await axios({
                method:'POST', 
                url:'/cart?isauth='+token,
                data:{
                    price:'500',
                    fooddata:id,
                    userdata:localStorage.getItem('userid')
                }
            });
            dispatch(addtocart(cartdata.data.data));
        }catch(err)
        {
            console.log(err.response)
            dispatch(carterror());
        }
    }
}

export const addfetcheditems=(data)=>{
    return {
        type:actionTypes.FETCHCART,
        cartitems:data
    }
}

export const fetchcart=(token,userid)=>{
    return async dispatch=>{
        dispatch({type:actionTypes.ADDCARTLOADING})
        try{
            // console.log(userid);
            const cartdata=await axios('/cart/userid/'+userid+'?isauth='+token);
            // console.log(cartdata);
            dispatch(addfetcheditems(cartdata.data.data));
        }catch(err)
        {
            dispatch(carterror());
        }
    }
}

export const deletedfromcart=(id)=>{
    return{
        type:actionTypes.DELETEFROMCART,
        id
    }
}

export const deletefromcart=(id,userid)=>{
    return async dispatch=>{
        try{
            console.log(id,userid);
            const cartdata=await axios({
                method:'DELETE',
                url:'/cart?isauth='+userid,
                data:{
                    id
                }
            });
            // console.log(cartdata);
            dispatch(deletedfromcart(id))
        }catch(err)
        {
            dispatch(carterror());
        }
    }
}