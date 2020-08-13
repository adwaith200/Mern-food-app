import * as actionTypes from './actionTypes';
import axios from '../../axiosbackend';

export const loginsuccess=(token,userid)=>{
    return{
        type:actionTypes.LOGIN_SUCCESS,
        token,
        userid
    }
}

export const loginfail=()=>{
    return {
        type:actionTypes.LOGIN_FAIL
    }
}

export const loginstart=(email,password)=>{
    return async dispatch=>{
        try{
            const userdata=await axios({
                method:'POST',
                url:'/user/login',
                data:{
                    email,
                    password
                }
            });
            localStorage.setItem('token',userdata.data.token);
            localStorage.setItem('userid',userdata.data.data._id);
            // console.log(userdata.data.data._id);
            dispatch(loginsuccess(userdata.data.token,userdata.data.data._id));
        }catch(err)
        {
            console.log(err.response);
            dispatch(loginfail());
        }
    }
}

export const logout=()=>{
    localStorage.clear('token');
    localStorage.clear('userid');
    return {
        type:actionTypes.LOGOUT
    }
}

export const autologin=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        if(token)
        {
            const userid=localStorage.getItem('userid');
            const logintoken={
                token,
                data:{
                    _id:userid
                }
            }
            dispatch(loginsuccess(token,userid))
        }
        else 
        {
            dispatch(logout());
        }
    }
}

export const signupstart=(name,email,password,confirmpassword)=>{
    return async dispatch=>{
        try{
            const userdata=await axios({
                method:'POST',
                url:'/user/signup',
                data:{
                    name,
                    email,
                    password,
                    confirmpassword
                }
            });
            localStorage.setItem('token',userdata.data.token);
            localStorage.setItem('userid',userdata.data.data._id);
            // console.log(userdata.data.data._id);
            dispatch(loginsuccess(userdata.data.token,userdata.data.data._id));
        }catch(err)
        {
            console.log(err.response);
            dispatch(loginfail());
        }
    }
}