import React from 'react';
import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => ({friendsList : state.friendsList.users})

const FriendsShort = connect(mapStateToProps)(Friends)

export default FriendsShort;