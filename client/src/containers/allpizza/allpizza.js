import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../../components/ui/Spinner/Spinner';
import {getallfoods} from '../../store/actions/getallfoods';
import classes from './allpizza.css';

class Allpizza extends Component{
    componentDidMount()
    {
        this.props.onfoods();
    }
    render(){
        let foodcontent=(
            this.props.foods.map(el=>{
                return (<div className="col s12 m6 l4 xl3" key={el._id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={el.image_url} className={classes.img}/>
                                    <span className="card-title">{el.title}</span>
                                </div>
                                <div className="card-content">
                                    <p>{el.publisher}</p>
                                </div>
                                <div className="card-action">
                                    <Link to={'/'+el._id}>Open</Link>
                                </div>
                            </div>
                        </div>);
            })
        )
        if(this.props.loading)
        {
            foodcontent=<Spinner/>
        }
        return (
            <div className='row'>
                {foodcontent}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        foods:state.foods.foods,
        loading:state.foods.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onfoods:()=>dispatch(getallfoods())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Allpizza);