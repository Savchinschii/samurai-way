import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string;
    likesCount: string;
}

export const Post = (props: PostPropsType) => {
    return <div className={classes.item}>
        <img src='https://whoer.net/blog/img/metadannye-foto-kak-uznat-nevidimuyu-informaciyu-fotografii.jpg'/>
        {props.message}
        <div>
            Like: {props.likesCount}
        </div>
    </div>

}