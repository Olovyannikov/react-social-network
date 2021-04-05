import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFax, faGem, faMailBulk, faNewspaper, faPoo, faVoicemail} from "@fortawesome/free-solid-svg-icons";
import "./App.scss"
import {faUser} from "@fortawesome/free-regular-svg-icons";

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px'
}

const profile = {
    position: 'relative',
    height: '40vh',
    minHeight: '250px',
    maxHeight: '350px',
    zIndex: 1
}

const App = () => {
    return (
        <>
            <header className={'header'}>
                <div className={'header-logo'}>
                    <FontAwesomeIcon size={'4x'} icon={faPoo}/>
                    <h2>The Poo Network</h2>
                </div>
            </header>
            <aside className={'aside'}>
                <nav className={'nav'}>
                    <ul className={'nav-list'}>
                        <li>
                            <a href="/profile">
                            <FontAwesomeIcon icon={faUser}/>
                                Profile
                            </a>
                        </li>
                        <li><a href="/messages">
                            <FontAwesomeIcon icon={faFax}/>
                            Messages</a></li>
                        <li><a href="/news">
                            <FontAwesomeIcon icon={faNewspaper}/>
                            News</a></li>
                    </ul>
                </nav>
                <a href="/settings">
                    <FontAwesomeIcon icon={faGem}/>
                    Settings</a>
            </aside>
            <main className={'content'}>
                <div style={profile} className="profile">
                    <div className="profileAvatar">
                        <img src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg" alt=""/>
                        <p className="profileName">Quan Ha</p>
                    </div>
                </div>
                <div className="posts">
                    <p>POSTS</p>

                    <button className="new-post">new post</button>

                    <p>post1</p>
                    <p>post2</p>
                </div>

            </main>
        </>
    );
}

export default App;
