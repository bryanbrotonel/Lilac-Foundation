import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const contentClient = contentful.createClient({
    space: 'lviz1x4y4a6n',
    accessToken: '788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231'
});

// Load team member
export function loadTeamMembers() {
    return dispatch => {
        return contentClient.getEntries({
                content_type: 'teamMember'
            }).then(({
                    items
                }) =>
                // Dispatches loading success action returning team members
                dispatch(actions.loadTeamMembersSuccess(items))
            )

            .catch(error => console.log(error));
    }
}