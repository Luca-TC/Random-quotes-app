import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { quotesReducer } from './quotesReducer'
const store = createStore(quotesReducer ,applyMiddleware(thunk))


export default store