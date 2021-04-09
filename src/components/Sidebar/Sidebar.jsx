import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faFax, faGem, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className={s.navList}>
                    <li>
                        <NavLink activeClassName={s.active} to="/profile">
                            <FontAwesomeIcon icon={faUser}/>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.active} to="/messages">
                            <FontAwesomeIcon icon={faFax}/>
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.active} to="/news">
                            <FontAwesomeIcon icon={faNewspaper}/>
                            News
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink activeClassName={s.active} to="/settings">
                <FontAwesomeIcon icon={faGem}/>
                    Settings
            </NavLink>
        </aside>
    )
}

export default Sidebar;