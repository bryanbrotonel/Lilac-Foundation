import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const contentClient = contentful.createClient({
    space: 'lviz1x4y4a6n',
    accessToken: '788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231'
});

// Dispatches end of loading action and logs an error into the console
function loadingTeamError(dispatch, error) {
    console.log(error);
    dispatch(actions.teamLoading(false));
}

// Sorts blog posts by descending date
function sortTeamMembers(team) {
    team.sort(function (a, b) {
        return Date.parse(a.fields.order) - Date.parse(b.fields.order);
    });

    return team;
}

// Load team member
export function loadTeamMembers() {
    return dispatch => {

        // Dispatches loading animation
        dispatch(actions.teamLoading());

        return contentClient.getEntries({
                content_type: 'teamMember'
            }).then(({
                    items
                }) =>
                // Dispatches loading success action returning team members
                dispatch(actions.loadTeamMembersSuccess(sortTeamMembers(items)))
            )
            .catch(error => loadingTeamError(dispatch, error));
    }
}