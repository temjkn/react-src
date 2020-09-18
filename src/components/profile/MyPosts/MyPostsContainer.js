import { addPostActionCreator,updateNewPostTextActionCreator,clickActionCreator} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
//вариант сделаннный руками, для понимания процесса
// function MyPostsContainer(props){
    
//     // let state = props.store.getState();
    

//     return(
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 // добавил новый пост
//                 let addPost = ()=>{
//                     store.dispatch(addPostActionCreator());
//                 };

//                 // изменил и добавил значение в textareat из state
//                 let onPostChange = (text) => {
//                     let action = (updateNewPostTextActionCreator(text));
//                     store.dispatch(action);
//                 };
//                 return <MyPosts 
//                     updateNewPostText = {onPostChange} 
//                     addPost = {addPost} 
//                     postsData = {state.profilePage.postsData} 
//                     newPostText={state.profilePage.newPostText}
//                 />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        postsData : state.profilePage.postsData,
        newPostText : state.profilePage.newPostText
    }
}

let mapDispathToProps = (dispatch) => {
    return{
        addPost : () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText : (text) => {
            let action = (updateNewPostTextActionCreator(text));
            dispatch(action);
        },
        clickActionCreator: (id) => {
            let action = clickActionCreator(id);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispathToProps)(MyPosts)

export default MyPostsContainer;