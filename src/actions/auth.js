import {LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE, LOGOUT} from './types';

import AuthService from '../services/auth.service';

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username,password).then(
        (data) => {
            if(data.status === "success"){
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:{user:data, username:username}
                });
                return Promise.resolve();
            }else{
                dispatch({
                    type:LOGIN_FAIL
                });

                dispatch({
                    type:SET_MESSAGE,
                    payload:data.error
                });
                return Promise.reject();
            }
            
        },
        (error) => {
            const message =(
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
                dispatch({
                    type:LOGIN_FAIL
                });

                dispatch({
                    type:SET_MESSAGE,
                    payload:message
                });

                return Promise.reject();
            }
    )
}

export const logout = (username) => (dispatch) => {
    AuthService.logout(username);
    dispatch({
        type:LOGOUT
    });
};