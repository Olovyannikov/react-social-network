import s from "../Sidebar.module.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuItems = ({sidebar}) => {
    const {links} = sidebar;
    return (
        <nav>
            <ul className={s.navList}>
                {links.map((item, index) => (
                        <li key={index}>
                            <NavLink activeClassName={s.active} to={item.link}>
                                <FontAwesomeIcon icon={item.icon}/>
                                {item.descr}
                            </NavLink>
                        </li>
                    )
                )
                }
            </ul>
        </nav>
    )
}

export default MenuItems;