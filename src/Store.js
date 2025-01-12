import { legacy_createStore as createStore, combineReducers ,applyMiddleware} from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {listingListReducer} from './reducers/ListingReducers'
import {modalReducer} from './reducers/ModalReducers'
import {userLoginReducer} from './reducers/UserReducer'

const reducer = combineReducers({
    listingList: listingListReducer, 
    modal: modalReducer,
    userLogin: userLoginReducer,    
});

const userInfoFromLS = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: {userInfo: userInfoFromLS}
};

const middleware =[thunk]

const store = createStore (
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;