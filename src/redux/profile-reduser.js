import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const CLICK = 'CLICK';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialStore = {
    postsData : [
    {id: 1, message: "hi!", likesCount:1},
    {id: 2, message: "ASDAShi!erwr", likesCount:25},
    {id: 3, message: "ASDSDASD", likesCount:36},
    {id: 4, message: "message", likesCount:5}
    ],
    newPostText : "",
    profile : null
}

const profileReducer = (state = initialStore,action) => {

    let stateCopy;

    switch(action.type){
        case UPDATE_NEW_POST_TEXT :{
            return {...state,newPostText : action.textMessage};//сделал копию стейта, для того чтобы функция connect()() увидела изменения и перерисовала страницу
        }
        case ADD_POST :{
            stateCopy = {...state};
            let postsDataLength = [...state.postsData].length;
            if(stateCopy.newPostText !== ''){
                let idNumber = postsDataLength + 1;
                return {
                    ...state,
                    postsData : [
                        ...state.postsData,
                        { //добавил новый обьект в массив с постами
                            id: idNumber,
                            message: stateCopy.newPostText,
                            likesCount:0
                        }
                    ],
                    newPostText : ''
                }
                    // аналог дабавления обьекта( нет push())
                    // let newPost = {
                    //     id: idNumber,
                    //     message: stateCopy.newPostText,
                    //     likesCount:0
                    // };
                    // stateCopy.postsData.push(newPost);
            }
            break;
        }
        case CLICK : {
            stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            for(let i = 0; i < stateCopy.postsData.length; i++){
                if(stateCopy.postsData[i].id === action.id){
                    stateCopy.postsData[i].likesCount++;
                }
            }
            return stateCopy;
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}


//creator для страницы постов
export const addPostActionCreator = () => ({type : ADD_POST}); //создаю обьект для dispatch
export const updateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, textMessage : text}); //создаю обьект для dispatch
export const clickActionCreator = (id) => ({type : CLICK, id : id}); //создаю обьект для dispatch
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile}); //создаю обьект для dispatch

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(
            response => {
                dispatch(setUserProfile(response.data));
            }
        )
    }
}

export default profileReducer;