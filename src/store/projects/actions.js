// Project actions

// Import Redux projects types
import {
    PROJECTS_LOADING,
    LOAD_CURRENT_PROJECTS_SUCCESS,
    LOAD_FUTURE_PROJECTS_SUCCESS,
    LOAD_PROJECT_POST_SUCCESS
}
from './types';

// Action that returns current state of projects load
export function projectsLoading(isLoading = true) {
    return {
        type: PROJECTS_LOADING,
        isLoading
    };
}

// Action that returns the sucessfully loaded projects
export function loadCurrentProjectsSuccess(currentProjects) {
    return {
        type: LOAD_CURRENT_PROJECTS_SUCCESS,
        currentProjects
    };
}

// Action that returns the sucessfully loaded projects
export function loadFutureProjectsSuccess(futureProjects) {
    return {
        type: LOAD_FUTURE_PROJECTS_SUCCESS,
        futureProjects
    };
}

// Action that returns the sucessfully loaded project
export function loadProjectPostSuccess(projectPost) {
    return {
        type: LOAD_PROJECT_POST_SUCCESS,
        projectPost
    };
}