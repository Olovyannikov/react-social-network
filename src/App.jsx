import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route, Redirect} from "react-router-dom";

const App = ({state}) => {
    const {messages, profile} = state;
    const sidebar = state.sidebar;
    return (
        <>
            <Header/>
            <Sidebar sidebar={sidebar}/>
            <main className={'content'}>
                <Route exact path='/'>
                    <Redirect to={'/profile'}/>
                </Route>
                <Route path='/profile' render={() => <Profile data={profile}/>}/>
                <Route path='/messages' render={() => <Messages messages={messages}/>}/>
            </main>
        </>
    );
}

export default App;