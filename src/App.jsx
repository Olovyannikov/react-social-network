import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = ({posts}) => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Profile posts={posts}/>
        </>
    );
}

export default App;
