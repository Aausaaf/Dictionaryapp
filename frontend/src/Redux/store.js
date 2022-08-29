import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
export const Store = createStore(reducer,applyMiddleware(thunk)) // creating store it is taking  two argument reducer middleware 
                                                                   // thuk we use to handle action which is fuction 
