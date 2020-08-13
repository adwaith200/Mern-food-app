import React, { Component, cloneElement,Fragment } from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/ui/Spinner/Spinner';
import {fetchcart,deletefromcart} from '../../store/actions/cart';
import {addorders} from '../../store/actions/orders';
import classes from './cart.css';

class Cart extends Component{
    componentDidMount()
    {
        // console.log(localStorage.getItem('userid'),localStorage.getItem('token'));
        this.props.onCart(localStorage.getItem('token'),localStorage.getItem('userid'));
    }
    render()
    {
        let orders=this.props.cart.map(el=>el.fooddata._id);
        let myclasses=[classes.rowcustom,'row'];
        let myclassesfirst=[classes.rowcustom,classes.rowfirst,'row'];
        let btnclasses=[classes.orderbtn,'waves-effect','waves-light','btn','black'];
        let content=(
            <Fragment>
                <div className={myclassesfirst.join(' ')}>
                    <div className="col s3">Product</div>
                    <div className="col s3">Description</div>
                    <div className="col s3">Price</div>
                    <div className="col s3">Remove</div>
                    
                </div>
                {this.props.cart.map(el=>{
                    return (<div className={myclasses.join(' ')} key={el.fooddata._id}>
                                <div className="col s3"><img src={el.fooddata.image_url} className={classes.img}></img></div>
                                <div className="col s3">{el.fooddata.title}</div>
                                <div className="col s3">{el.price}</div>
                                <div className="col s3"><button onClick={this.props.onCartDelete.bind(this,el._id,this.props.token)}>X</button></div>
                            </div>)
                })}
                <div>
                    <h5><strong>TOTAL:{this.props.total}</strong></h5>
                    <a className={btnclasses.join(' ')} onClick={this.props.order.bind(this,orders,this.props.userid,this.props.token)}>Place Order</a>
                </div>
            </Fragment>
        )
        if(this.props.loading)
        {
            content=<Spinner/>
        }
        return(
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        cart:state.cart.cart,
        total:state.cart.total,
        loading:state.cart.loading,
        token:state.login.token,
        userid:state.login.userid
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onCart:(token,userid)=>dispatch(fetchcart(token,userid)),
        onCartDelete:(id,token)=>dispatch(deletefromcart(id,token)),
        order:(orders,userid,token)=>dispatch(addorders(orders,userid,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);