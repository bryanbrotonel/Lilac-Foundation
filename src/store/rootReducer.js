import {
    combineReducers
} from 'redux'
import base from './base/reducer'
import blog from './blog/reducer'
import work from './work/reducer'

// Redux root reducers
export const rootReducer = combineReducers({
    base,
    blog,
    work
})