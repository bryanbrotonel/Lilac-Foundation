// Work actions

// Import Redux Work types
import {
    WORK_LOADING,
    LOAD_WORK_SUCCESS,
    LOAD_WORK_POST_SUCCESS
}
from './types';

// Action that returns current state of work load
export function workLoading(isLoading = false) {
    return {
        type: WORK_LOADING,
        isLoading
    };
}

// Action that returns the sucessfully loaded work
export function loadWorkSuccess(work) {
    return {
        type: LOAD_WORK_SUCCESS,
        work
    };
}

// Action that returns the sucessfully loaded work
export function loadWorkPostSuccess(workPost) {
    return {
        type: LOAD_WORK_POST_SUCCESS,
        workPost
    };
}