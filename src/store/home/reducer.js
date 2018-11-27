// Home reducer

import initialState from '../initialState';
import {
    HOME_CONTENT_LOADING,
    LOAD_TLF_CREST_SUCCESS,
    LOAD_ABOUT_BLURB_SUCCESS,
    LOAD_DONATE_BLURB_SUCCESS
} from './types';

export default function homeReducer(state = initialState.home, action) {
    switch (action.type) {

        // Home content loading type
        case HOME_CONTENT_LOADING:
            return {
                ...state,
                loading: action.isLoading
            };

            // Successful about blurb loading type
        case LOAD_TLF_CREST_SUCCESS:
            return {
                ...state,
                TLFCrest: action.TLFCrest,
                loading: false
            };

            // Successful about blurb loading type
        case LOAD_ABOUT_BLURB_SUCCESS:
            return {
                ...state,
                aboutBlurb: action.aboutBlurb,
                loading: false
            };

            // Successful donate blurb loading type
        case LOAD_DONATE_BLURB_SUCCESS:
            return {
                ...state,
                donateBlurb: action.donateBlurb,
                loading: false
            }

            // Default case
        default:
            return state;
    }
}