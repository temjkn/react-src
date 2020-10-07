import React from 'react';
import classes from './User.module.css';
import avatarImage from '../../assets/images/avatar.png'

function User(props) {
    let pageCouter = Math.ceil(props.totalUsersCount / props.usersOnPage)
    let pages = []
    for(let i = 1; i <= pageCouter; i++){
        pages.push(i)
    }
    return <div>
        <div className = {classes.pagination}>{pages.map(
                p => {
                    return <span className = {props.currentPage === p && classes.activePage} 
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