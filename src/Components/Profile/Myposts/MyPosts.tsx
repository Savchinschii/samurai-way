import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postDataProps} from "../../../redux/state";

export type MyPostsPropsType = {
    postData: Array<postDataProps>
    addPost:(postMessage: string)=> void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
        }
    }
    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={postMessageRef}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>

        <div className={classes.posts}>
            {postElements}
        </div>
    </div>
}