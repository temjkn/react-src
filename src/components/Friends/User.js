import * as Axios from 'axios';
import React from 'react';
import classes from './User.module.css';
import avatarImage from '../../assets/images/avatar.png'

class User extends React.Component{
    constructor(props){
        super(props);

        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                }
            );
    }
    onCangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(
            response => this.props.setUsers(response.data.items)
        );
    }
    // getUsers = () => {
    //     if(this.props.users.length === 0) {
    //         Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
    //             response => this.props.setUsers(response.data.items)
    //         )
    //     }
    // }
    render(){
        let pageCouter = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage)
        let pages = []
        for(let i = 1; i <= pageCouter; i++){
            pages.push(i)
        }
        return <div>
            <div className = {classes.pagination}>{pages.map(
                    p => {
                        return <span className = {this.props.currentPage === p && classes.activePage} 
                        onClick={(e) => {
                            this.onCangedPage(p)
                        }}>{p}_</span>
                    }
                )
            }</div>
        {
            this.props.users.map( u => <div key={u.id} className={classes.card}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatarImage} alt={u.name} className={classes.photo}/>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}
// let User = (props) => {
//     if(props.users.length === 0) {
//         Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
//             response => props.setUsers(response.data.items)
//         )
//     }
//     return <div>
//         {
//             props.users.map( u => <div key={u.id} className={classes.card}>
//                     <div>
//                         <img src={u.photos.small != null ? u.photos.small : avatarImage} alt={u.name} className={classes.photo}/>
//                         {u.followed
//                             ? <button onClick={() => {
//                                 props.unfollow(u.id)
//                             }}>Unfollow</button>
//                             : <button onClick={() => {
//                                 props.follow(u.id)
//                             }}>Follow</button>}
//                         <span>{u.status}</span>
//                     </div>
//                     <div className={classes.info}>
//                         <div>
//                             <span>{u.firstName}</span>
//                             <span>{u.name}</span>
//                         </div>
//                         <div>
//                             {/* <span>{u.location.country}</span> */}
//                             {/* <span>{u.location.sity}</span> */}
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//     </div>
// }
export default User