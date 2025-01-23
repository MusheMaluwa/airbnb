import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_SIGNUP_REQUEST, // Import signup action types
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
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

export const signup = (name, email, password, phone) => async (dispatch) => {
    try {
        dispatch({ type: USER_SIGNUP_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            'http://localhost:3000/api/signup',
            { name, email, password, phone },
            config
        );

        console.log("Signup successful, response data:", data);

        localStorage.setItem('userInfo', JSON.stringify(data));

        // Dispatch signup success
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });

        // After successful signup, you can navigate to login or close modal
        // For example, if you're using React Router, you can navigate here:
        // navigate('/login');   // Using useNavigate hook from react-router-dom

    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
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
