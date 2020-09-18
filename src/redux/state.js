import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import friendsListReducer from "./friendList-reducer";

let store = {
    _state : {
        profilePage:{
            postsData : [
            {id: 1, message: "hi!", likesCount:1},
            {id: 2, message: "ASDAShi!erwr", likesCount:25},
            {id: 3, message: "ASDSDASD", likesCount:36},
            {id: 4, message: "message", likesCount:5}
            ],
            newPostText : ""
        },
        dialogsPage:{
            dialogsData : [
                {id: 1, name: "Valera"},
                {id: 2, name: "Bob"},
                {id: 3, name: "Alex"},
                {id: 4, name: "John"}
                ],
            messagesData : [
            {id: 1, message: "MessageSShi!", your: false},
            {id: 2, message: "MessageSSASDAShi!erwr", your: false},
            {id: 3, message: "MessageSSASDSDASD", your: true},
            {id: 4, message: "MessageSSmessage", your: true},
            {id: 5, message: "MessageSSmessage", your: true},
            {id: 6, message: "MessageSSmessage", your: false},
            {id: 7, message: "lastMessageSSmessage", your: true}
            ],
            newMessageText : ''
        },
        friendsList:[
            {name:"Vlad",photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", linkOnPage:"15"},
            {name:"Blad",photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", linkOnPage:"#rt"},
            {name:"Flat",photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", linkOnPage:"https://www.youtube.com/watch?v=GW5PwlzXBDc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=31&t=0s"}
        ]
    },
    _callSubscriber() {console.log('State changed')},

    getState() {
        return this._state
    },
    subscribe(observer) { //переопределяет метод-заглушку _callSubscriber из этого файла на функцию которая находится в index.js Я ЕСТЬ ПАТТЕРН!!!!
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsList = friendsListReducer(this._state.friendsList, action);

        this._callSubscriber(this._state);
    }
};


export default store;












