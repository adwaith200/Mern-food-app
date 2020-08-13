import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/ui/Spinner/Spinner';
import {fetchorders} from '../../store/actions/orders';
import classes from './orders.css'

class Orders extends Component{
    componentDidMount()
    {
        this.props.onOrdersFetch(this.props.token);
    }
    render()
    {
        let myclassesfirst=[classes.rowcustom,'row'];
        let content=(
            <Fragment>
                <div className={myclassesfirst.join(' ')}>
                    <div className="col s4">Product</div>
                    <div className="col s4">Description</div>
                    <div className="col s4">Price</div>
                </div>
                {this.props.orders.map(order=>{
                    return order.fooddata.map(el=>{
                        return (
                            <div className={myclassesfirst.join(' ')} key={el._id}>
                                <div className="col s4"><img src={el.image_url} className={classes.img}></img></div>
                                <div className="col s4">{el.title}</div>
                                <div className="col s4">{order.price}</div>
                            </div>
                        )
                    })
                })}
            </Fragment>
        );
        if(this.props.loading)
        {
            content=<Spinner/>
        }
        return(
            <div>
                {content}
                {/* <div className={myclassesfirst.join(' ')}>
                    <div className="col s4">Product</div>
                    <div className="col s4">Description</div>
                    <div className="col s4">Price</div>
                </div>
                {this.props.orders.map(order=>{
                    return order.fooddata.map(el=>{
                        return (
                            <div className={myclassesfirst.join(' ')} key={el._id}>
                                <div className="col s4"><img src={el.image_url} className={classes.img}></img></div>
                                <div className="col s4">{el.title}</div>
                                <div className="col s4">{order.price}</div>
                            </div>
                        )
                    })
                })} */}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        orders:state.orders.orders,
        loading:state.orders.loading,
        token:state.login.token
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onOrdersFetch:(token)=>dispatch(fetchorders(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);