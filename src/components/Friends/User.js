import * as Axios from 'axios';
import React from 'react';
import classes from './User.module.css';
import avatarImage from '../../assets/images/avatar.png'

let User = (props) => {
    if(props.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => props.setUsers(response.data.items)
        )
    }
    return <div>
        {
            props.users.map( u => <div key={u.id} className={classes.card}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatarImage} alt={u.name} className={classes.photo}/>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        <span>{u.status}</span>
                    </div>
                    <div className={classes.info}>
                        <div>
                            <span>{u.firstName}</span>
                            <span>{u.name}</span>
                        </div>
                        <div>
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