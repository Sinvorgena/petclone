import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";

let redusers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogsReducer,
    sideBar: SideBarReducer
})

let store = createStore(redusers)

console.log(redusers)

export default store