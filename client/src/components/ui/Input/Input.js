/* eslint-disable default-case */
import React from 'react';

const input=props=>{
    let input=null;
    switch(props.type)
    {
        case 'email':input=(<div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={props.changehandler.bind(this,props.data.key)}/>
                                    <label for="email">Email</label>
                                </div>
                            </div>);
                    break;
        case 'password':input=(<div className="row">
                                    <div className="input-field col s12">
                                    {props.label?<input id="confirmpassword" type="password" className="validate" onChange={props.changehandler.bind(this,props.data.key)}/>:<input id="password" type="password" className="validate" onChange={props.changehandler.bind(this,props.data.key)}/>}
                                    {props.label?<label for="confirmpassword">Confirm Password</label>:<label for="password">Password</label>}
                                    </div>
                                </div>);
                    break;
        case 'text':input=(<div className="row">
                                <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate" onChange={props.changehandler.bind(this,props.data.key)}/>
                                <label for="first_name">First Name</label>
                                </div>
                            </div>);
                    break;
    }
    return input;
}

export default input;