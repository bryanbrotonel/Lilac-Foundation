import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const blogClient = contentful.createClient({
    space: 's85q1dv8e3m5',
    accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// The Lilac Foundation Client
const contentClient = contentful.createClient({
    space: 'lviz1x4y4a6n',
    accessToken: '788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231'
});

// Loads header image with id
export function loadHeaderImage(id) {
    return dispatch => {
        return blogClient.getAsset(id).then((asset) => {
            dispatch(actions.loadHeaderImageSuccess(asset.fields.file.url))
        });
    }
}

// Loads social media
export function loadSocialMedia(id) {
    return dispatch => {
        return contentClient.getEntry(id).then((socials) => {
            dispatch(actions.loadSocialsSuccess(socials.fields))
        }).catch(error => console.log(error));
    }
}

// Loads about page items
export function loadAboutItems() {
    return dispatch => {
        return contentClient.getEntries({
                content_type: 'aboutItem',
                select: 'fields.title,fields.headerImage,fields.description',
                order: 'fields.order'
            }).then(({
                    items
                }) =>
                // Dispatches loading success action return blog
                dispatch(actions.loadAboutItemsSuccess(items))
            ).catch(error => console.log(error));
    }
}