import React from 'react';
import classes from './User.module.css';

let User = (props) => {
    return <div>
        {
            props.users.map( u => <div key={u.id} className={classes.card}>
                    <div>
                        <img src={u.photo} alt={u.photo} className={classes.photo}/>
                        {u.follow
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
                            <span>{u.location.country}</span>
                            <span>{u.location.sity}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}
export default User