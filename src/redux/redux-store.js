import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsListReducer from "./friendList-reducer";
import authReducer from "./auth-reduser";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    friendsList : friendsListReducer,
    auth : authReducer
});

let store = createStore(redusers);

export default store;