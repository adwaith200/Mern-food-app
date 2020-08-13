import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import getallfoodsreducer from './store/reducers/getallfoods';
import getonefoodreducer from './store/reducers/getonefood';
import cartreducer from './store/reducers/cart';
import ordersreducer from './store/reducers/orders';
import loginreducer from './store/reducers/login';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer=combineReducers({
    foods:getallfoodsreducer,
    food:getonefoodreducer,
    cart:cartreducer,
    login:loginreducer,
    orders:ordersreducer
});

const store=createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
