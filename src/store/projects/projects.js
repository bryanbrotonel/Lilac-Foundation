import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const client = contentful.createClient({
    space: 's85q1dv8e3m5',
    accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// Dispatches end of loading action and logs an error into the console
function loadProjectsError(dispatch, error) {
    console.log(error);
    dispatch(actions.projectsLoading(false));
}

// Loads all projects from Contentful
export function loadProjects() {
    return dispatch => {
        // Dispatches loading animation
        dispatch(actions.projectsLoading());

        // Retreives and returns client project post entries
        return client
            .getEntries({
                content_type: 'projectPost'
            })
            .then(({
                    items
                }) =>
                // Dispatches loading success action return project
                dispatch(actions.loadProjectsSuccess(items))
            )
            .catch(error => loadProjectsError(dispatch, error));
    };
}

// Loads single project post from id from Contentful
export function loadProjectPost(id) {
    return dispatch => {
        // Dispatches loading animation
        dispatch(actions.projectsLoading());

        // Retreives and returns requested client post entry
        return client
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