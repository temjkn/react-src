const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    myFriendtsList: 0,
    totalUsersCount: 0,
    usersOnPage: 15,
    currentPage: 1
    // users: [
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
    //     },
    //     {
    //         id: 2,
    //         firstName: "Shhladys",
    //         name:"Blad",
    //         photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", 
    //         linkOnPage:"#rt",
    //         location:{
    //             country: "BelaRussia",
    //             sity:"Gorki"
    //         },
    //         status: "Blad my status",
    //         follow: true
    //     },
    //     {
    //         id: 3,
    //         firstName: "Shhladys2",
    //         name:"Flat",
    //         photo:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", 
    //         linkOnPage:"https://www.youtube.com/watch?v=GW5PwlzXBDc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=31&t=0s",
    //         location:{
    //             country: "Poland",
    //             sity:"Gdansk"
    //         },
    //         status: "my status Flat",
    //         follow: false
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
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setTotalUserCountAC = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })

export default friendsListReducer;