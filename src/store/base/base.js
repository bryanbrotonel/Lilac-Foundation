import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const client = contentful.createClient({
    space: 's85q1dv8e3m5',
    accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// Loads header image with id
export function loadHeaderImage(id) {
    return dispatch => {
        return client.getAsset(id).then((asset) => {
            dispatch(actions.loadHeaderImageSuccess(asset.fields.file.url))
        });
    }
}