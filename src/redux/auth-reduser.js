import { usersAPI } from "../api/api";
import {Form } from "react-final-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR';

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth :false,
    messageError : ''
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USER_DATA :
            return {...state,
                    ...action.payload
                };//сделал копию стейта, для того чтобы функция connect()() увидела изменения и перерисовала страницу
        case SET_MESSAGE_ERROR :
            return {...state,
                    messageError : action.messageError
                };//сделал копию стейта, для того чтобы функция connect()() увидела изменения и перерисовала страницу
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}  }) //создаю обьект для dispatch
export const setMessageError = (messageError) => ({type:SET_MESSAGE_ERROR, messageError});

export const getAuthUserDataThunk = () => {
    return (dispatch) => {
        return usersAPI.getAuth().then(data =>{
            if(data.resultCode === 0){ //если авторизован - отпавляю свои данные(ид, маил, логин)
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const loginTHUNK = (email,password,rememberMe) => (dispatch) => {
        usersAPI.sendLogin(email,password,rememberMe)
            .then(response =>{
                if(response.data.resultCode === 0){ //если авторизован - отпавляю свои данные(ид, маил, логин)
                    dispatch(getAuthUserDataThunk())
                    dispatch(setMessageError(''))
                }else{
                    let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Undefined error';
                    // console.log(Form.FORM_ERROR = messageError)
                    // Form.error= messageError
                    dispatch(setMessageError(messageError))
                }
        });
    }

export const logoutTHUNK = () => {
    return (dispatch) => {
        usersAPI.Logout()
            .then(response =>{
                if(response.data.resultCode === 0){ //если авторизован - удаляю свои данные(ид, маил, логин)
                    dispatch(setAuthUserData(null,null,null, false));
                }
        });
    }
}

export default authReducer;