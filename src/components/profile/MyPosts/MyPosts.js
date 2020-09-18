import React from 'react';
import classes from './../Profile.module.css';
import Post from './post/Post';
function MyPosts(props){
    // получил массив из постов в state и добавил в обьект postsElements
    let postsElements = props.postsData.map(
        post=> <Post key = {post.id} clickActionCreator =  {props.clickActionCreator} text={post.message} like={post.likesCount} id={post.id}/>
    );

    // получил доступ к textarea через ref
    let newPostElement = React.createRef();

    // добавил новый пост
    let addPost = ()=>{
        props.addPost()
    };

    // изменил и добавил значение в textareat из state
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return(
        <div>
            <h1>My posts</h1>
            <textarea 
            className={classes.new_news} 
            placeholder="your news"
            ref={newPostElement} 
            onChange = {onPostChange} 
            value ={props.newPostText}
            />
            <input className="button" type="submit" value='send' onClick={ addPost }/>
            <div className={classes.news_wrap}>
                {postsElements.reverse()}
            </div>
      </div>
    );
}
export default MyPosts;