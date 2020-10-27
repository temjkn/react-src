import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '61a29f40-98d9-40e5-abd3-8e91c609f067'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, usersOnPage = 15){ //после запроса на сервер возвращает его результат
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(
                response => {
                    return response.data
                }
            );
    },
    getAuth(){
        return instance.get(`/auth/me`).then(
            response => {
                return response.data
            }
        )
    },
    isFollow(id){
        return instance.post(`/follow/${id}`,{}).then(
            response => {
                return response.data
            }
        )
    },
    isUnfollow(id){
        return instance.delete(`/follow/${id}`).then(
            response => {
                return response.data
            }
        )
    }

// Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { // post запрос отправлется с 3мя пораметрами,
//                                 withCredentials: true,                                                      // третьим отправляем настройки с куками и апи
//                                 headers: {
//                                     'API-KEY' : '61a29f40-98d9-40e5-abd3-8e91c609f067'
//                                 }
//                             })
//                                 .then(response => {
//                                     response.data.resultCode === 0 && props.follow(u.id)
//                                 });

};