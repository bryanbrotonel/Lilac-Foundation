import {
    combineReducers
} from 'redux'
import base from './base/reducer'
import home from './home/reducer'
import projects from './projects/reducer'
import blog from './blog/reducer'
import team from './team/reducer'

// Redux root reducers
export const rootReducer = combineReducers({
    base,
    home,
    projects,
    blog,
    team
})