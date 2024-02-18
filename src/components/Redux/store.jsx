import {applyMiddleware} from "redux"
import {legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from "./rootReducer"
import rootSaga from "./songSagas";


const sagaMiddleWare =createSagaMiddleware();
const middlewares= [sagaMiddleWare];


// if(ProcessingInstruction.env.NODE_ENV === "development"){
// 	middlewares.push(logger)
// }


const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga)

export default store;
