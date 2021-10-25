import {
    GET_CATEGORIES,
    GET_GAMES,
    FILTER_GAMES,
    SEARCH_GAMES
  } from "../actions/types";

  const initialState = { games: null, categories: null };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
      const {type, payload } = action;

      switch (type) {
        case GET_GAMES:
          return {
            ...state,
            games:payload.games
          };
        case GET_CATEGORIES:
          return {
            ...state,
            categories:payload.categories
          };
        case FILTER_GAMES:
        return {
            ...state,
            filteredGames:payload.games.filter(game => game.categoryIds.includes(payload.categoryId))
        };
        case SEARCH_GAMES:
        return {
            ...state,
            filteredGames:payload.name ? payload.games.filter(game => game.name.toLowerCase().includes(payload.name.toLowerCase())) : payload.games
        };
        default:
          return state;
      }
  }