// Team actions

// Improt Redux team types
import {
    LOAD_TEAM_MEMBERS_SUCCESS,
    LOAD_TEAM_MEMBER_SUCCESS
} from './types';

// Action that returns the successfully loaded team member information
export function loadTeamMembersSuccess(teamMembers) {
    return {
        type: LOAD_TEAM_MEMBERS_SUCCESS,
        teamMembers
    };
}

// Action that returns the successfully loaded team member information
export function loadTeamMemberSuccess(teamMember) {
    return {
        type: LOAD_TEAM_MEMBER_SUCCESS,
        teamMember
    };
}