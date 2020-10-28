import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';
const SET_MY_FRIENDS = 'SET_MY_FRIENDS';

let initialState = {
    users: [],
    myFriendtsList: [],
    totalUsersCount: 0,
    usersOnPage: 35,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
    // users: [ такими были пользователи в начале
    //     {
    //         id: 1,
    //         firstName: "Bladys",
    //         name:"Shhlad",
    //         photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    //         linkOnPage:"15",
    //         location: {
    //             country: "Russia",
    //             sity:"Kazan"
    //         },
    //         status: "my status",
    //         follow: true
    //     }
    // ]
};

const friendsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,    //сделал копию массива
                users: state.users.map( u =>  {     // перебираю пользавателей
                    if (u.id === action.userId) {   //если ID пользователя совпало с принятым
                        return {...u, followed: true}     //создаю копию пользователя с новым состоянием follow
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users
            }
        }
        case SET_MY_FRIENDS: {
            return { ...state, myFriendtsList: action.users.filter( u => u.followed && u)}
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_LOADING: {
            return { ...state, isLoading: action.isLoading}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    // если true - копирую новый массив с пользователями на которые решил подписатся-отписатся
                    ? [...state.followingInProgress, action.userId]
                    //иначе фильтрую по id, тот что подходит - не проходит фильтр и не попадает в новую копию массива
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId });
export const unfollow = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setMyFriends = (users) => ({type: SET_MY_FRIENDS, users });
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading });
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

// thunkCreator, ф-ция высшего порядка, возвращает другую ф-цию, в параметрах принимает необходимые данные
// и возвращает thunk(санки)
export const getUsersThunk = (currentPage,usersOnPage) => { //thunkCreator
    return (dispatch) => { //сами санки
        dispatch(toggleIsLoading(true))
        usersAPI.getUsers(currentPage,usersOnPage).then(
            data => {
                dispatch(toggleIsLoading(false))
                dispatch(setUsers(data.items))
                dispatch(setMyFriends(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            }
        );
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        //action, первый параметр говорит удалить или добавить второй параметр (id)
        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.isUnfollow(userId).then(data =>{ // после выполнения запроса делает ещё одно действие "then"
            data.resultCode === 0 && dispatch(unfollow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        });
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        //action, первый параметр говорит удалить или добавить второй параметр (id)
        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.isFollow(userId).then(data =>{ // после выполнения запроса делает ещё одно действие "then"
            data.resultCode === 0 && dispatch(follow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        });
    }
}

export default friendsListReducer;