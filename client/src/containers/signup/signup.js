import React, { Component } from 'react';
import Input from '../../components/ui/Input/Input';
import classes from './signup.css';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {signupstart} from '../../store/actions/login';

class Signup extends Component{
    state={
        name:{
            value:null,
            key:1
        },
        email:{
            value:null,
            key:2
        },
        password:{
            value:null,
            key:3
        },
        confirmpassword:{
            value:null,
            key:4
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
    signupHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.onSignup(this.state.name.value,this.state.email.value,this.state.password.value,this.state.confirmpassword.value);
        this.setState({
            loggedin:true
        });
    }
    render(){
        return (
            <div className={classes.signupcontainer}>
                {this.state.loggedin?<Redirect to='/'/>:null}
                <h4>Sign Up</h4>
                <div className={classes.signup}>
                    <Input type='text' data={this.state.name} changehandler={this.changehandler}/>
                    <Input type='email' data={this.state.email} changehandler={this.changehandler}/>
                    <Input type='password' data={this.state.password} changehandler={this.changehandler}/>
                    <Input type='password' data={this.state.confirmpassword} changehandler={this.changehandler} label='Confirm Password'/>
                    <a className="waves-effect waves-light btn black " onClick={this.signupHandler}>Signup</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onSignup:(name,email,password,confirmpassword)=>dispatch(signupstart(name,email,password,confirmpassword))
    }
}

export default connect(null,mapDispatchToProps)(Signup);