import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataProps} from "../../index";

type ProfilePropsType = {
    postData: Array<postDataProps>
}

export const Profile = (props:ProfilePropsType) => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData}></MyPosts>
    </div>
}