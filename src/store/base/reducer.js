// Base reducer

import initialState from '../initialState';
import {
    LOAD_HEADER_IMAGE_SUCCESS
} from './types';

// Base app reducer
export default function baseReducer(state = initialState.base, action) {
    switch (action.type) {

        // Successful header image load type
        case LOAD_HEADER_IMAGE_SUCCESS:
            return {
                ...state,
                headerImage: action.headerImage
            };

            // Default case
        default:
            return state;
    }
}