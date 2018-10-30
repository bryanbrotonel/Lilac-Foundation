import {
    combineReducers
} from 'redux'
import blog from './blog/reducer'
import work from './work/reducer'

// Redux root reducers
export const rootReducer = combineReducers({
    blog,
    work
})