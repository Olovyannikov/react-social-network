import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faComment, faGem, faUser, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import FriendsList from "./FriendList/FriendsList";
import MenuItems from "./MenuItems/MenuItems";

library.add(
    faComment, faUser, faNewspaper
);

const Sidebar = ({sidebar}) => {
    return (
        <aside>
            <MenuItems sidebar={sidebar}/>
            <NavLink activeClassName={s.active} to="/settings">
                <FontAwesomeIcon icon={faGem}/>
                Settings
            </NavLink>
            <FriendsList friends={sidebar.friends}/>
        </aside>
    )
}

export default Sidebar;