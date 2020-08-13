import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from '../../components/ui/Input/Input';
import classes from './login.css';
import {loginstart} from '../../store/actions/login';
import { Redirect } from 'react-router';

class Login extends Component{
    state={
        email:{
            value:null,
            key:1
        },
        password:{
            value:null,
            key:2
        },
        loggedin:false
    }
    changehandler=(key,e)=>{
        // console.log(key,e.target.value);
        for(let item in this.state)
        {
            if(key===this.state[item].key)
            {
                let myitem={...this.state[item]};
                myitem.value=e.target.value;
                this.state[item].value=myitem.value;
            }
        }
         
    }
    loginHandler=()=>{
        // console.log(this.state.email.value,this.state.password.value);
        this.props.onLogin(this.state.email.value,this.state.password.value);
        this.setState({
            loggedin:true
        });
    }
    render(){
        return (
            <div className={classes.logincontainer}>
                {this.state.loggedin?<Redirect to='/'/>:null}
                <h4>Login</h4>
                <div className={classes.login}>
                    <form onSubmit={this.loginHandler}>
                        <Input type='email' data={this.state.email} changehandler={this.changehandler}/>
                        <Input type='password' data={this.state.password} changehandler={this.changehandler}/>
                        <a className="waves-effect waves-light btn black " onClick={this.loginHandler}>Login</a>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        loading:state.login.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onLogin:(email,password)=>dispatch(loginstart(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);