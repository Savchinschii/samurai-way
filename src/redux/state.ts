
let onChange = () => {
    console.log('hello')
}

export const subscribe = (callback: ()=> void) => {
    onChange = callback
}


export type postDataProps = {
    id:number,
    message:string,
    likesCount:number
}
export type messagePropsType = {
    id:number,
    message:string
}
export type dialogsPropsType = {
    id:number,
    name:string
}
export type statePropsType = {
    dialogs:Array<dialogsPropsType>,
    messages:Array<messagePropsType>,
    postData:Array<postDataProps>
    newPostText: string
}
export const state: statePropsType = {
    dialogs : [
        {id:1, name:'Egor'},
        {id:2, name:'Ivan'},
        {id:3, name:'Evgenii'},
        {id:4, name:'Victor'},
        {id:5, name:'Vladislav'},
        {id:6, name:'Vasilii'},
    ],

    messages : [
        {id:1, message:'Hello'},
        {id:2, message:'How are you?'},
        {id:3, message:'Brother'},
        {id:4, message:'Im fine'},
        {id:5, message:'Go to work'},
        {id:6, message:'Yo Im Vasilii'},
    ],
    postData : [
        {id:1, message:'Hello my friend', likesCount : 23},
        {id:2, message:'How are you?', likesCount: 2322}
    ],
    newPostText : ' '
}

export const addPost = () => {
    let newPost: postDataProps = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0
    }
    state.postData.push(newPost);
    onChange();
}

export const updateNewPostText = (newText: string) => {
    state.newPostText = newText;
    onChange();
}