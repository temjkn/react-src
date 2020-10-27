const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth :false
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USER_DATA :
            return {...state,
                    ...action.data,
                    isAuth: true
                };//сделал копию стейта, для того чтобы функция connect()() увидела изменения и перерисовала страницу
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}  }) //создаю обьект для dispatch
export default authReducer;