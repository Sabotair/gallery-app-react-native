import {combineReducers} from 'redux'
import {galeryReducer} from './galery/reducer'
const rootReducer = combineReducers({
  galery: galeryReducer,
})

export default rootReducer
