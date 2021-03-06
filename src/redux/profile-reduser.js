import { profileAPI, usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const CLICK = 'CLICK';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialStore = {
    postsData : [
    {id: 1, message: "hi!", likesCount:1},
    {id: 2, message: "ASDAShi!erwr", likesCount:25},
    {id: 3, message: "ASDSDASD", likesCount:36},
    {id: 4, message: "message", likesCount:5}
    ],
    newPostText : "",
    profile : null,
    status : ""
}

const profileReducer = (state = initialStore,action) => {

    let stateCopy;

    switch(action.type){
        case UPDATE_NEW_POST_TEXT :{
            return {...state,newPostText : action.textMessage};//сделал копию стейта, для того чтобы функция connect()() увидела изменения и перерисовала страницу
        }
        case ADD_POST :{
            // let newPost = {
            //     id: 5,
            //     message: action.newPostText,
            //     likesCount: 0
            // };
            // return {
            //     ...state,
            //     postsData: [...state.postsData, newPost],
            //     newPostText: ''
            // };
            stateCopy = {...state};
            let postsDataLength = [...state.postsData].length;
            let idNumber = postsDataLength + 1;
            let newPost = {
                id: idNumber,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData : [...state.postsData,newPost],
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
        case SET_STATUS : {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}


//creator для страницы постов
export const addPostActionCreator = (newPostText) => ({type : ADD_POST, newPostText}); //создаю обьект для dispatch
export const updateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, textMessage : text}); //создаю обьект для dispatch
export const clickActionCreator = (id) => ({type : CLICK, id : id}); //создаю обьект для dispatch
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile}); //создаю обьект для dispatch
export const setStatus = (status) => ({type : SET_STATUS, status}); //создаю обьект для dispatch

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(
            response => {
                dispatch(setUserProfile(response.data));
            }
        )
    }
}

export const getUserStatusTHUNK = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            response => {
                dispatch(setStatus(response.data))
            }
        )
    }
}

export const updateStatusTHUNK = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            response =>{
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            }
        )
    }
}

export default profileReducer;