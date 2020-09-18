const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialStore = {
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
};

const dialogsReducer = (state = initialStore,action) => {
    let stateCopy;
    switch(action.type){
        case UPDATE_TEXT_MESSAGE :{
            return {
                ...state,
                newMessageText : action.textMessage
            };
        }
        case ADD_MESSAGE :{
            stateCopy = {...state};
            if(stateCopy.newMessageText !== ''){
                return {
                    ...state,
                    messagesData : [
                        ...state.messagesData,
                        {
                            id: 8,
                            message: stateCopy.newMessageText,
                            your: true
                        }
                    ],
                    newMessageText : ''
                }
            };
            break;
        }
        default:
            return state;
    }
}

//creator для страницы сообщений
export const updateTextMessageActionCreator = (text) => ({type : UPDATE_TEXT_MESSAGE, textMessage : text});  //создаю обьект для dispatch
export const addMessageActionCreator = () => ({type : ADD_MESSAGE}); //создаю обьект для dispatch

export default dialogsReducer;