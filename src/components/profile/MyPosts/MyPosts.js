import React from 'react';
import { Field, Form } from 'react-final-form';
import classes from './../Profile.module.css';
import Post from './post/Post';

let PostForm = (props) => (
    <Form onSubmit = {props.onSubmit}
        validate={values => {
            const errors = {}
            if (!values.postMessage) {
                errors.postMessage = 'You cant post empty message';
            }
            return errors
        }}
        render = {({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={classes.postForm}>
                <Field name="postMessage">
                    {({ input, meta }) => (
                        <>
                            <textarea {...input} type="Textarea" placeholder="your news"
                            className={classes.new_news}/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                            {/* {meta.active && (meta.modifiedSinceLastSubmit && meta.submitFailed) && (<span>{meta.error}</span>)} */}
                        </>
                    )}
                </Field>
                <Field>
                    {({input,meta}) => (
                        <>
                            <input className="button" type="submit" value='send'/>
                        </>
                    )}
                </Field>
            </form>
        )}
    />);

function MyPosts(props){
    // получил массив из постов в state и добавил в обьект postsElements
    let postsElements = props.postsData.map(
        post=> <Post key = {post.id} clickActionCreator =  {props.clickActionCreator} text={post.message} like={post.likesCount} id={post.id}/>
    );
    const onSubmit = (formData) => {
        props.addPost(formData.postMessage);
        formData.postMessage= '';
    }
    return(
        <div>
            <h1>My posts</h1>
            <PostForm onSubmit = {onSubmit}/>
            <div className={classes.news_wrap}>
                {postsElements.reverse()}
            </div>
      </div>
    );
}
export default MyPosts;