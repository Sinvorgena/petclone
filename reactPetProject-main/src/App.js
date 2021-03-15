import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/sideBar/sideBar";
import Profile from "./components/appWrapperContent/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/appWrapperContent/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/appWrapperContent/News/News";
import Music from "./components/appWrapperContent/Music/Music";
import Setting from "./components/appWrapperContent/Setting/Setting";

let App = (props) => {
    return (
        <div className="appWrapper">
            <Header/>
            <SideBar SideBarState={props.store.getState().sideBar}/>
            <div className="appWrapperContent">
                <Route path={"/profile"} render={() =>
                    <Profile
                        ProfileState={props.store.getState().Profile}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route path={"/dialogs"} render={() =>
                    <Dialogs
                        DialogsState={props.store.getState().Dialogs}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route path={"/feed"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/setting"} render={() => <Setting/>}/>
            </div>
            <Footer/>
        </div>
    )
}


export default App;






