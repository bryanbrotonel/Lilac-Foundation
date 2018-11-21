// Project reducer

import initialState from '../initialState';
import {
    PROJECTS_LOADING,
    LOAD_CURRENT_PROJECTS_SUCCESS,
    LOAD_FUTURE_PROJECTS_SUCCESS,
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

        // Successful current projects loading type
        case LOAD_CURRENT_PROJECTS_SUCCESS:
            return {
                ...state,
                currentProjects: action.currentProjects,
                loading: false
            };
            
        // Successful future projects loading type
        case LOAD_FUTURE_PROJECTS_SUCCESS:
            return {
                ...state,
                futureProjects: action.futureProjects,
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