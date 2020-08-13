import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/login';
import { Redirect } from 'react-router';

class Logout extends Component{
    state={
        loggedout:false
    }
    componentDidMount(){
        this.props.onLogout();
        this.setState({
            loggedout:true
        });
    }
    render()
    {
        return (
            <div>
                {this.state.loggedout?<Redirect to='/'/>:null}
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onLogout:()=>dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout);