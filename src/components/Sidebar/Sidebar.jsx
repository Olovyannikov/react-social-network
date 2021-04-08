import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faFax, faGem, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className={s.navList}>
                    <li>
                        <a className={s.active} href="/profile">
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
    )
}

export default Sidebar;