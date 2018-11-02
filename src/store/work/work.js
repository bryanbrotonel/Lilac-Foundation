import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const client = contentful.createClient({
    space: 's85q1dv8e3m5',
    accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// Dispatches end of loading action and logs an error into the console
function loadingWorkError(dispatch, error) {
    console.log(error);
    dispatch(actions.workLoading(false));
}


// Sorts work posts by descending date
function sortWorkItems(workPosts) {
    workPosts.sort(function (a, b) {
        return Date.parse(b.fields.date) - Date.parse(a.fields.date);
    });

    return workPosts;
}

// Loads all works  from Contentful
export function loadWork() {
    return dispatch => {
        // Dispatches loading animation
        dispatch(actions.workLoading());

        // Retreives and returns client work post entries
        return client
            .getEntries({
                content_type: 'workPost'
            })
            .then(({
                    items
                }) =>
                // Dispatches loading success action return work
                dispatch(actions.loadWorkSuccess(sortWorkItems(items)))
            )
            .catch(error => loadingWorkError(dispatch, error));
    };
}

// Loads single work post from id from Contentful
export function loadWorkPost(id) {
    return dispatch => {
        // Dispatches loading animation
        dispatch(actions.workLoading());

        // Retreives and returns requested client post entry
        return client
            .getEntry(id)
            .then(({
                    fields
                }) =>
                // Dispatches loading success action return work post
                dispatch(actions.loadWorkPostSuccess(fields))
            )
            .catch(error => loadingWorkError(dispatch, error));
    };
}