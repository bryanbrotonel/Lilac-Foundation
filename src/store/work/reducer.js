// Work reducer

import initialState from '../initialState';
import {
    WORK_LOADING,
    LOAD_WORK_SUCCESS,
    LOAD_WORK_POST_SUCCESS
}
from './types';

// Reducer updating works page when successfully loaded
export default function workReducer(state = initialState.work, action) {
    switch (action.type) {
        // Work loading type
        case WORK_LOADING:
            return {
                ...state,
                loading: action.isLoading
            };

            // Successful work loading type
        case LOAD_WORK_SUCCESS:
            return {
                ...state,
                work: action.work,
                loading: false
            };

            // Successful work post loading type
        case LOAD_WORK_POST_SUCCESS:
            return {
                ...state,
                workPost: action.workPost,
                loading: false
            };

            // Default acese
        default:
            return state;
    }
}