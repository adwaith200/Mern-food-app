import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navigationitems extends Component{
    componentDidMount(){
        // var elems = document.querySelectorAll('.sidenav');
        // var instances = M.Sidenav.init(elems, options);
    }
    render(){
        return (
            <React.Fragment>
                <nav>
                    <div className='nav-wrapper grey lighten-4'>
                        <ul id="nav-mobile" className="right hide-on-sm-and-down">
                            <li><Link to="/" className='black-text'>Home</Link></li>
                            {this.props.isauth?<li><Link to="/cart" className='black-text'>Cart</Link></li>:null}
                            {this.props.isauth?<li><Link to="/orders" className='black-text'>Orders</Link></li>:null}
                            {!this.props.isauth?<li><Link to="/login" className='black-text'>Login</Link></li>:null}
                            {!this.props.isauth?<li><Link to="/signup" className='black-text'>Sign Up</Link></li>:null}
                            {this.props.isauth?<li><Link to="/logout" className='black-text'>Log Out</Link></li>:null}
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps=state=>{
    return {
        isauth:state.login.token!==null
    }
}

export default connect(mapStateToProps)(Navigationitems);