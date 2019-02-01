// Base actions

// Import Redux base types
import {
  LOAD_LILAC_LOGO_SUCCESS,
  LOAD_DONATE_LINK_SUCCESS,
  LOAD_ABOUT_ITEMS_SUCCESS,
  LOAD_PLACEHOLDER_SUCCESS,
  LOAD_HEADER_IMAGE_SUCCESS,
  LOAD_SOCIALS_SUCCESS,
  LOAD_FOOTER_BLURB_SUCCESS
} from "./types";

// Action that returns successfully retreived socials
export function loadLilacLogoSuccess(lilacLogo) {
  return {
    type: LOAD_LILAC_LOGO_SUCCESS,
    lilacLogo
  };
}

// Action that returns successfully retreived socials
export function loadDoanteLinkSuccess(donateLink) {
  return {
    type: LOAD_DONATE_LINK_SUCCESS,
    donateLink
  };
}

// Action that rsuccessfully eturns retreived socials
export function loadAboutItemsSuccess(aboutItems) {
  return {
    type: LOAD_ABOUT_ITEMS_SUCCESS,
    aboutItems
  };
}

// Action that successfully returns loaded header image
export function loadPlaceholderImageSuccess(placeholderImage) {
  return {
    type: LOAD_PLACEHOLDER_SUCCESS,
    placeholderImage
  };
}

// Action that successfully returns loaded header image
export function loadHeaderImageSuccess(headerImage) {
  return {
    type: LOAD_HEADER_IMAGE_SUCCESS,
    headerImage
  };
}

// Action that successfully returns retreived socials
export function loadSocialsSuccess(socials) {
  return {
    type: LOAD_SOCIALS_SUCCESS,
    socials
  };
}

// Action that successfully returns retreived socials
export function loadFooterBlurbSuccess(footerBlurb) {
  return {
    type: LOAD_FOOTER_BLURB_SUCCESS,
    footerBlurb
  };
}
