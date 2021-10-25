import {GET_GAMES, FILTER_GAMES, GET_CATEGORIES, SET_MESSAGE, SEARCH_GAMES} from './types'

export const getGames = () => (dispatch) => {
    return fetch("http://localhost:3001/games")
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_GAMES,
                    payload:{games:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const getCategories = () => (dispatch) => {
    return fetch("http://localhost:3001/categories")
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload:{categories:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const filterGamesByCategories = (games,categoryId) => (dispatch) => {
    dispatch({
        type:FILTER_GAMES,
        payload:{games:games, categoryId}
    });
}

export const searchGamesByTitle = (games,name) => (dispatch) => {
    dispatch({
        type:SEARCH_GAMES,
        payload:{games:games, name}
    });
}