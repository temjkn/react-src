import React from 'react';
import classes from './User.module.css';
import avatarImage from '../../assets/images/avatar.png'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

function User(props) {
    let pageCouter = Math.ceil(props.totalUsersCount / props.usersOnPage)
    let pages = []
    for(let i = 1; i <= pageCouter; i++){
        pages.push(i)
    }
    return <div>
        <div className = {classes.pagination}>{pages.map(
                p => {
                    return <span key = {p.id} className = {props.currentPage === p ? classes.activePage : 'notActive'} 
                    onClick={(e) => {
                        props.onCangedPage(p)
                    }}>{p}_</span>
                }
            )
        }</div>
    {
        props.users.map( u => <div key={u.id} className={classes.card}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : avatarImage} alt={u.name} className={classes.photo}/>
                    {u.followed
                        ? <button onClick={() => {
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers : {
                                        'API-KEY' : '61a29f40-98d9-40e5-abd3-8e91c609f067'
                                    }
                                })
                                    .then(response => {
                                        response.data.resultCode === 0 && props.unfollow(u.id)
                                    });
                            }}>Unfollow</button>
                        : <button onClick={() => {
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : '61a29f40-98d9-40e5-abd3-8e91c609f067'
                                    }
                                })
                                    .then(response => {
                                        response.data.resultCode === 0 && props.follow(u.id)
                                    });
                            }}>Follow</button>}
                    <span>{u.status}</span>
                </div>
                <div className={classes.info}>
                    <div>
                        <span>{u.firstName}</span>
                        <span>{u.name}</span>
                    </div>
                    <div>
                        <NavLink to = {'/profile/'+u.id}>see profile</NavLink>
                        {/* <span>{u.location.country}</span> */}
                        {/* <span>{u.location.sity}</span> */}
                    </div>
                </div>
            </div>
        )
    }
    </div>
}
export default User