import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsListReducer from "./friendList-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

//combineReducers - собириает в кучу редюсеры
let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    friendsList : friendsListReducer,
    auth : authReducer
});

//createStore - создает стор
//applyMiddleware(thunkMiddleware) - конструкция для промежуточного слоя thunkCreator
let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;