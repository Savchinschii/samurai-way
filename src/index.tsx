import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type postDataProps = {
    id:number,
    message:string,
    likesCount:string
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
}
const state: statePropsType = {
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
        {id:1, message:'Hello my friend', likesCount :'23'},
        {id:2, message:'How are you?', likesCount: '2322'}
    ],

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App state={state} />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
