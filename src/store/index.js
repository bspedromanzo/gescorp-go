import { createStore, combineReducers } from 'redux'
import list from './reducer'

const rootReducer = combineReducers({
  list: list
})

const store = createStore(rootReducer)

export default store

