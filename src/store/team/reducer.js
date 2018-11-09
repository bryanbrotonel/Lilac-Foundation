// Team reducer

import initialState from '../initialState';
import {
    TEAM_LOADING,
    LOAD_TEAM_MEMBERS_SUCCESS
} from './types';

// Team reducer
export default function teamReducer(state = initialState.team, action) {
    switch (action.type) {

        // Blog loading type
        case TEAM_LOADING:
            return {
                ...state,
                loading: action.isLoading
            };

            // Successful team members load
        case LOAD_TEAM_MEMBERS_SUCCESS:
            return {
                ...state,
                teamMembers: action.teamMembers,
                loading: false
            }

        default:
            return state;

    }
}