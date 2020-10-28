import React from 'react';
import { connect } from "react-redux";
import Friends from "./Friends";

function FriendsShort(props){
    return <Friends myFriendtsList = {props.myFriendtsList}/>
}

const mapStateToProps = (state) => {
    return {
        myFriendtsList: state.friendsList.myFriendtsList
    }
}

export default connect(mapStateToProps)(FriendsShort);

// class FriendsShort extends React.Component{
//     constructor(props){
//         super(props);
//         console.log(props)
//     }
//     render(){
//         return <Friends myFriendtsList = {this.props.myFriendtsList}/>
//     }
// }

// let mapStateToProps = (state) => ({friendsList : state.friendsList.myFriendtsList});

// export default connect(mapStateToProps)(FriendsShort);