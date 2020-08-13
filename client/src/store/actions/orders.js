import * as actionTypes from './actionTypes';
import axios from '../../axiosbackend';

export const fetchorderssuccess=(data)=>{
    return {
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orderdata:data
    }
}

export const fetchordersfail=()=>{
    return {
        type:actionTypes.FETCH_ORDERS_FAIL
    }
}

export const fetchorders=(token)=>{
    return async dispatch=>{
        dispatch({type:actionTypes.ADDORDERSLOADING})
        try{
            const orderdata=await axios('/order/userid?isauth='+token);
            dispatch(fetchorderssuccess(orderdata.data.data));
        }catch(err)
        {
            console.log(err.response);
            dispatch(fetchordersfail());
        }
    }
}

export const addorderssuccess=(data)=>{
    return {
        type:actionTypes.ADDORDERSSUCCESS,
        orderdata:data
    }
}

export const addorders=(orders,userid,token)=>{
    return async dispatch=>{
        try{
            const orderdata=await axios({
                method:'POST', 
                url:'/order?isauth='+token,
                data:{
                    price:500,
                    fooddata:orders,
                    userdata:userid
                }
            });
            dispatch(addorderssuccess(orderdata.data.data))
        }catch(err)
        {
            console.log(err);
        }
    }
}