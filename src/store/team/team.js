import {
    contentClient
} from '../contentful';
import * as actions from './actions';

// Dispatches end of loading action and logs an error into the console
function loadingTeamError(dispatch, error) {
    console.log(error);
    dispatch(actions.teamLoading(false));
}

// Load team member
export function loadTeamMembers() {
    return dispatch => {

        // Dispatches loading animation
        dispatch(actions.teamLoading());

        return contentClient.getEntries({
                content_type: 'teamMember',
                order: 'fields.order'
            }).then(({
                    items
                }) =>
                // Dispatches loading success action returning team members
                dispatch(actions.loadTeamMembersSuccess(items))
            )
            .catch(error => loadingTeamError(dispatch, error));
    }
}