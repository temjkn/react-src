const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    myFriendtsList: 0,
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
            return { ...state, users: action.users }
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
                followingInProgress: action.isFetching // если true - копирую новый массив с пользователями на которые решил подписатся-отписатся
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId) //иначе удаляю пользователей из массива когда получаю ответ от сервера
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading })
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId })

export default friendsListReducer;