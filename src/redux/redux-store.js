import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsListReducer from "./friendList-reducer";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    friendsList : friendsListReducer
});

let store = createStore(redusers);

export default store;