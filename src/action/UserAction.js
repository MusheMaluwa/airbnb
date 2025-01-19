import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../type/UserTypes';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            'http://localhost:3000/api/login',
            { email, password },
            config
        );

        localStorage.setItem('userInfo', JSON.stringify(data));

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const signup = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            'http://localhost:3000/api/signup',
            { email, password},
            config
        );

        console.log("Login successful, response data:", data); // Debug

        localStorage.setItem('userInfo', JSON.stringify(data));

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};
