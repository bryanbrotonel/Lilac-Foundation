// Base reducer

import initialState from '../initialState';

import {
    LOAD_LILAC_LOGO_SUCCESS,
    LOAD_PLACEHOLDER_SUCCESS,
    LOAD_HEADER_IMAGE_SUCCESS,
    LOAD_SOCIALS_SUCCESS,
    LOAD_ABOUT_ITEMS_SUCCESS,
    LOAD_FOOTER_BLURB_SUCCESS
} from './types';

// Base app reducer
export default function baseReducer(state = initialState.base, action) {
    switch (action.type) {

        // Successful lilac logo load type
        case LOAD_LILAC_LOGO_SUCCESS:
            return {
                ...state,
                lilacLogo: action.lilacLogo
            };

        // Successful placeholder image load type
        case LOAD_PLACEHOLDER_SUCCESS:
            return {
                ...state,
                placeholderImage: action.placeholderImage
            };

        // Successful header image load type
        case LOAD_HEADER_IMAGE_SUCCESS:
            return {
                ...state,
                headerImage: action.headerImage
            };

        // Successful socials load type
        case LOAD_SOCIALS_SUCCESS:
            return {
                ...state,
                socials: action.socials
            };

        // Successful about items load type
        case LOAD_ABOUT_ITEMS_SUCCESS:
            return {
                ...state,
                aboutItems: action.aboutItems
            }

        // Successful footer blurb load type
        case LOAD_FOOTER_BLURB_SUCCESS:
            return {
                ...state,
                footerBlurb: action.footerBlurb
            }

        // Default case
        default:
            return state;
    }
}