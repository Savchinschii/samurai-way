import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {statePropsType} from "./index";

type AppPropsType = {
    state: statePropsType
}
function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                <Route path='/dialogs'  element={<Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                <Route path='/profile' element={<Profile postData={props.state.postData}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
