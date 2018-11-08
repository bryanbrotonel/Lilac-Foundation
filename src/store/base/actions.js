// Base actions

// Import Redux base types
import {
    LOAD_HEADER_IMAGE_SUCCESS,
    LOAD_SOCIALS_SUCCESS
} from './types';

// Action that returns the successfully loaded header image
export function loadHeaderImageSuccess(headerImage) {
    return {
        type: LOAD_HEADER_IMAGE_SUCCESS,
        headerImage
    };
}

// Action that returns successfully retreived socials
export function loadSocialsSuccess(socials) {
    return {
        type: LOAD_SOCIALS_SUCCESS,
        socials
    }
}