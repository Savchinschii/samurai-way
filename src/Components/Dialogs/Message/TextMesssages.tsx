import classes from "../Dialogs.module.css";

type TextMessages = {
    message:string
}
export const TextMessages = (props:TextMessages) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}