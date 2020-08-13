import * as actionTypes from './actionTypes';
import axios from '../../axiosbackend';

export const getfoodsuccess=data=>{
    return {
        type:actionTypes.GETFOODSUCCESS,
        food:data
    }
}

export const getfoodfail=()=>{
    return{
        type:actionTypes.GETFOODFAIL
    }
}

export const getfood=(id)=>{
    return async dispatch=>{
        dispatch({type:actionTypes.GETFOOD})
        try{
            const fooddata=await axios('/food/'+id);
            dispatch(getfoodsuccess(fooddata.data.data));
        }catch(err)
        {
            dispatch(getfoodfail(err));
        }
    }   
}