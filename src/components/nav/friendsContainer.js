import { connect } from "react-redux";
import Friends from "../Friends/Friends";

{/* <StoreContext.Consumer>
    {(store) => {
        let state = store.getState();
        return <Friends friendsList = {state.friendsList}/>
    }}
</StoreContext.Consumer> */}

let mapStateToProps = (state) => ({friendsList : state.friendsList})

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;