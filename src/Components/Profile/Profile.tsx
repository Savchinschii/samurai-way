import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataProps} from "../../redux/state";

export type ProfilePropsType = {
    postData: Array<postDataProps>
    addPost:(postMessage: string)=> void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData} addPost={props.addPost} ></MyPosts>
    </div>
}