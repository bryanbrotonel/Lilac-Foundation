// Project reducer

import initialState from '../initialState';
import {
    PROJECTS_LOADING,
    LOAD_PROJECTS_SUCCESS,
    LOAD_PROJECT_POST_SUCCESS
}
from './types';

// Reducer updating projects page when successfully loaded
export default function projectReducer(state = initialState.projects, action) {
    switch (action.type) {

        // Project loading type
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: action.isLoading
            };

        // Successful projects loading type
        case LOAD_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects,
                loading: false
            };

        // Successful project post loading type
        case LOAD_PROJECT_POST_SUCCESS:
            return {
                ...state,
                projectPost: action.projectPost,
                loading: false
            };

        // Default case
        default:
            return state;
    }
}