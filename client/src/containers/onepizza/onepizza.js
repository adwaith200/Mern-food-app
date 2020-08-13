import React, { Component } from 'react';
import classes from './onepizza.css';
import Spinner from '../../components/ui/Spinner/Spinner';
import {connect} from 'react-redux';
import {getfood} from '../../store/actions/getonefood';
import {additems} from '../../store/actions/cart';

class Onepizza extends Component{
    componentDidMount() 
    {
        this.props.onFood(this.props.match.params.id);
    }
    gotoLogin=()=>{
        this.props.history.push('/login');
    }
    render()
    { 
        let classarr=[classes.rowcustom,'row']
        // console.log(this.props.food);
        return(
            <div className={classarr.join(' ')}>
                {this.props.loading?<Spinner/>:
                <React.Fragment>
                    <div className="col s12 m6">
                        <img src={this.props.food.image_url} className={classes.img}></img>
                    </div>
                    <div className="col s12 m6">
                        <h3>{this.props.food.title}</h3>
                        <h4>Size :6Inch</h4>
                    <button className={classes.button}
                        onClick={this.props.token!==null?this.props.onAdd.bind(this,this.props.match.params.id,this.props.token):null}>
                            {this.props.token!==null?<span>Add to cart</span>:<span>Login to add to cart</span>}
                    </button>
                        <h6 className={classes.para}>Pizza products are prepared fresh and ship directly Monday - Saturday using our tried-and-true packing methods to ensure a safe journey.</h6>
                        <p>Get it shipped to your home as soon as Tuesday, July 14th</p>
                        <p>Live near a store? Select in-store pick up in checkout.</p>
                    </div>
                </React.Fragment>}
            </div>    
        )
    }
}

const mapStateToProps=state=>{
    return {
        food:state.food.food,
        loading:state.food.loading,
        token:state.login.token
    }
}
 
const mapDispatchToProps=dispatch=>{
    return {
        onFood:(id)=>dispatch(getfood(id)),
        onAdd:(id,token)=>dispatch(additems(id,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Onepizza);