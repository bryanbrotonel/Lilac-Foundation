// Team actions

// Improt Redux team types
import {
    TEAM_LOADING,
    LOAD_TEAM_MEMBERS_SUCCESS
} from './types';

// Action that returns current state of blog load
export function teamLoading(isLoading = true) {
    return {
        type: TEAM_LOADING,
        isLoading
    };
}

// Action that returns the successfully loaded team member information
export function loadTeamMembersSuccess(teamMembers) {
    return {
        type: LOAD_TEAM_MEMBERS_SUCCESS,
        teamMembers
    };
}