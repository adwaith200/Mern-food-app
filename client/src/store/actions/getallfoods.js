import * as actionTypes from './actionTypes';
import axios from '../../axiosbackend';

export const getallfoodssuccess=(foods)=>{
    return {
        type:actionTypes.GETALLFOODSSUCCESS,
        foods:foods
    }
}

export const getallfoodsfail=()=>{
    return {
        type:actionTypes.GETALLFOODSFAIL
    }
}

export const getallfoods=()=>{
    return async dispatch=>{
        dispatch({type:actionTypes.GETALLFOODS});
        try{
            const fooddata=await axios('/food');
            dispatch(getallfoodssuccess(fooddata.data.data));
        }catch(err)
        {
            dispatch(getallfoodsfail());
        }
    }
}