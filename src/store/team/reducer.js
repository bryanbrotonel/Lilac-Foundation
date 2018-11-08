// Team reducer

import initialState from '../initialState';
import {
    LOAD_TEAM_MEMBERS_SUCCESS,
    LOAD_TEAM_MEMBER_SUCCESS
} from './types';

// Team reducer
export default function teamReducer(state = initialState.team, action) {
    switch (action.type) {

        // Successful team members load
        case LOAD_TEAM_MEMBERS_SUCCESS:
            return {
                ...state,
                teamMembers: action.teamMembers
            }

        // Successful team member load
        case LOAD_TEAM_MEMBER_SUCCESS:
            return {
                ...state,
                teamMember: action.teamMember
            }

        default:
        return state;

    }
}
