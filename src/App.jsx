import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

const App = ({posts, messages}) => {
    return (
        <Router>
            <Header/>
            <Sidebar/>
            <main className={'content'}>
                <Route exact path='/'>
                    <Redirect to={'/profile'}/>
                </Route>
                <Route path='/profile'>
                    <Profile posts={posts}/>
                </Route>
                <Route path='/messages'>
                    <Messages messages={messages}/>
                </Route>
            </main>
        </Router>
    );
}

export default App;
