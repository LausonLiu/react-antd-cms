import { createStore, combineReducers } from "redux"
import notifyReducer from "./NotifyReducer"

export default createStore(notifyReducer)