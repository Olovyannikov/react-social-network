import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPoo} from "@fortawesome/free-solid-svg-icons";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <NavLink to={'/'} className={s.headerLogo}>
                    <FontAwesomeIcon size={'4x'} icon={faPoo}/>
                    <h2>The Poo Network</h2>
                </NavLink>
            </header>
        </>
    )
}

export default Header;