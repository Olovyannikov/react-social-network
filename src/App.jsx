import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

const App = ({state}) => {
    const { messages, profile } = state;
    return (
        <Router>
            <Header/>
            <Sidebar/>
            <main className={'content'}>
                <Route exact path='/'>
                    <Redirect to={'/profile'}/>
                </Route>
                <Route path='/profile' render={() => <Profile data={profile}/>}/>
                <Route path='/messages' render={() => <Messages messages={messages}/>}/>
            </main>
        </Router>
    );
}

export default App;