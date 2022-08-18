import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {TextMessages} from "./Message/TextMesssages";
import {dialogsPropsType, messagePropsType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<dialogsPropsType>,
    messages: Array<messagePropsType>,
}

export const Dialogs = (props:DialogsPropsType) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElement = props.messages.map(m => <TextMessages message={m.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>

    )
}