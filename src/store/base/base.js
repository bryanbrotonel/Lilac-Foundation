import * as contentful from "contentful";
import * as actions from "./actions";

// The Lilac Foundation Client
const contentClient = contentful.createClient({
  space: "lviz1x4y4a6n",
  accessToken:
    "788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231"
});

// Donate Link
export function loadLilacLogo() {
  return dispatch => {
    return contentClient
      .getAsset("11JMH7ZEbGUK20s0YcIWIU")
      .then(asset =>
        dispatch(actions.loadLilacLogoSuccess(asset.fields.file.url))
      )
      .catch(error => console.log(error));
  };
}

// Loads donate link
export function loadDonateLink() {
  return dispatch => {
    return contentClient
      .getEntry("4rfjxAZlVASfEH5qAPW7JN")
      .then(entry => {
        dispatch(actions.loadDoanteLinkSuccess(entry.fields.donateLink));
      })
      .catch(error => console.log(error));
  };
}

// Loads header image with id
export function loadPlaceholderImage() {
  return dispatch => {
    return contentClient
      .getAsset("49YZTDMPagEM0uymEwEIA2")
      .then(asset =>
        dispatch(actions.loadPlaceholderImageSuccess(asset.fields.file.url))
      )
      .catch(error => console.log(error));
  };
}

// Loads header image with id
export function loadHeaderImage(id) {
  return dispatch => {
    return contentClient
      .getAsset(id)
      .then(asset =>
        dispatch(actions.loadHeaderImageSuccess(asset.fields.file.url))
      )
      .catch(error => console.log(error));
  };
}

// Loads social media
export function loadSocialMedia(id) {
  return dispatch => {
    return contentClient
      .getEntry(id)
      .then(socials => dispatch(actions.loadSocialsSuccess(socials.fields)))
      .catch(error => console.log(error));
  };
}

// Loads about page items
export function loadAboutItems() {
  return dispatch => {
    return contentClient
      .getEntries({
        content_type: "aboutItem",
        select: "fields.title,fields.headerImage,fields.description",
        order: "fields.order"
      })
      .then(({ items }) =>
        // Dispatches loading success action return blog
        dispatch(actions.loadAboutItemsSuccess(items))
      )
      .catch(error => console.log(error));
  };
}

// Loads footer blurb with id
export function loadFooterBlurb(id) {
  return dispatch => {
    return contentClient
      .getEntry(id)
      .then(blurb => dispatch(actions.loadFooterBlurbSuccess(blurb.fields)))
      .catch(error => console.log(error));
  };
}
