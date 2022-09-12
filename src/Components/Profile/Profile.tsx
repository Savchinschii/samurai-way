import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataProps, updateNewPostText} from "../../redux/state";

export type ProfilePropsType = {
    postData: Array<postDataProps>
    addPost:(postMessage: string)=> void
    updateNewPostText: (newText: string)=> void
    newPostText: string
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}
        ></MyPosts>
    </div>
}