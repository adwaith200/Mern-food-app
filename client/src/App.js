import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigationitems from './components/Navigationitems/Navigationitems';
import Allpizza from './containers/allpizza/allpizza';
import Onepizza from './containers/onepizza/onepizza';
import Cart from './containers/cart/cart';
import Orders from './containers/orders/orders';
import Login from './containers/login/login';
import Signup from './containers/signup/signup';
import Footer from './components/footer/footer';
import Logout from './containers/logout/logout';
import {autologin} from './store/actions/login';
import classes from './App.css';

class App extends Component {
    componentDidMount(){
      this.props.onLogin();
    }
    render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navigationitems/>
          <Switch>
            <Route path='/' exact component={Allpizza}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/logout' component={Logout}/> 
            <Route path='/:id' component={Onepizza}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps=state=>{
//   return {
//     isauth:state.login.token!==null
//   }
// }

const mapDispatchToProps=dispatch=>{
  return {
    onLogin:()=>dispatch(autologin())
  }
}

export default connect(null,mapDispatchToProps)(App);
