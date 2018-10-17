import { combineReducers } from 'redux'
import blog from './blog/reducer'

// Redux root reducers
export const rootReducer = combineReducers({
    blog
})