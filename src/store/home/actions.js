// Home actions

import {
    HOME_CONTENT_LOADING,
    LOAD_ABOUT_BLURB_SUCCESS,
    LOAD_DONATE_BLURB_SUCCESS
} from "./types";

// Action that returns current state of home content loading
export function homeContentLoading(isLoading = true) {
    return {
        type: HOME_CONTENT_LOADING,
        isLoading
    };
}

// Action that returns the successfully loaded about blurb
export function loadAboutBlurbSuccess(aboutBlurb) {
    return {
        type: LOAD_ABOUT_BLURB_SUCCESS,
        aboutBlurb
    };
}

// Action that returns the successfully loaded about blurb
export function loadDonateBlurbSuccess(donateBlurb) {
    return {
        type: LOAD_DONATE_BLURB_SUCCESS,
        donateBlurb
    };
}