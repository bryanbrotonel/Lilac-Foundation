import * as contentful from 'contentful';
import * as actions from './actions';

import {
    loadAboutBlurbSuccess,
    loadDonateBlurbSuccess
} from './actions';

// The Lilac Foundation Client
const contentClient = contentful.createClient({
    space: 'lviz1x4y4a6n',
    accessToken: '788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231'
});

// Dispatches end of loading action and logs an error into the console
function loadingHomeContentError(dispatch, error) {
    console.log(error);
    dispatch(actions.homeContentLoading(false));
}

// Loads about blurb with id
export function loadAboutBlurb(id) {
    return dispatch => {

        // Dispatches loading animation
        dispatch(actions.homeContentLoading());

        return contentClient.getEntry(id).then((blurb) => {
            dispatch(loadAboutBlurbSuccess(blurb.fields))
        }).catch(error => loadingHomeContentError(dispatch, error));
    }
}

// Loads donate blurb with id
export function loadDonateBlurb(id) {
    return dispatch => {

        // Dispatches loading animation
        dispatch(actions.homeContentLoading());

        return contentClient.getEntry(id).then((blurb) => {
            dispatch(loadDonateBlurbSuccess(blurb.fields))
        }).catch(error => loadingHomeContentError(dispatch, error));
    }
}