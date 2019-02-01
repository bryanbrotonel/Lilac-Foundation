import {
    postClient
} from '../contentful';
import * as actions from './actions';

// Dispatches end of loading action and logs an error into the console
function loadProjectsError(dispatch, error) {
    console.log(error);
    dispatch(actions.projectsLoading(false));
}

// Loads current projects from Contentful
export function loadCurrentProjects(limit = 100) {
    return dispatch => {
        postClient
            .getEntries({
                content_type: 'projectPost',
                'fields.currentProject': 'true',
                order: '-fields.date',
                limit: limit
            })
            .then(({
                    items
                }) =>
                // Dispatches loading success action return project
                dispatch(actions.loadCurrentProjectsSuccess(items))
            )
            .catch(error => loadProjectsError(dispatch, error));
    }
}

// Loads future projects from Contentful
export function loadFutureProjects() {
    return dispatch => {
        postClient
            .getEntries({
                content_type: 'projectPost',
                'fields.currentProject': 'false'
            })
            .then(({
                    items
                }) =>
                // Dispatches loading success action return project
                dispatch(actions.loadFutureProjectsSuccess(items))
            )
            .catch(error => loadProjectsError(dispatch, error));
    }
}

// Loads single project post from id from Contentful
export function loadProjectPost(id) {
    return dispatch => {
        // Dispatches loading animation
        dispatch(actions.projectsLoading());

        // Retreives and returns requested client post entry
        return postClient
            .getEntry(id)
            .then(({
                    fields
                }) =>
                // Dispatches loading success action return project post
                dispatch(actions.loadProjectPostSuccess(fields))
            )
            .catch(error => loadProjectsError(dispatch, error));
    };
}