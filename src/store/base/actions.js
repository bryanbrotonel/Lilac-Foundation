// Base actions

// Import Redux base types
import {
    LOAD_HEADER_IMAGE_SUCCESS
} from './types';

// Action that returns the successfully loaded header image
export function loadHeaderImageSuccess(headerImage) {
    return {
        type: LOAD_HEADER_IMAGE_SUCCESS,
        headerImage
    };
}