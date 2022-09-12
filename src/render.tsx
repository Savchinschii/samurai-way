import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost,  updateNewPostText} from "./redux/state";
import {state} from "./redux/state";

export const renderTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}  updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}


