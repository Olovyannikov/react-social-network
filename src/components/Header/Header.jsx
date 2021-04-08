import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPoo} from "@fortawesome/free-solid-svg-icons";
import s from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.headerLogo}>
                    <FontAwesomeIcon size={'4x'} icon={faPoo}/>
                    <h2>The Poo Network</h2>
                </div>
            </header>
        </>
    )
}

export default Header;