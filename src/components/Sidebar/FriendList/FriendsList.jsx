import {NavLink} from "react-router-dom";
import s from "./FriendsList.module.scss";

const FriendsList = ({friends}) => {
    return (
        <ul className={s.friends}>
            {friends.map((f, i) => (
                <li key={i}>
                    <NavLink title={`${f.name} ${f.lastname}`} className={s.friendBlock} to={`/user/${f.id}`}>
                        <img src={f.avatar} alt=""/>
                        <p className={s.friendNameBlock}>
                            <span className={s.friendName}>{f.name} </span>
                        </p>
                    </NavLink>
                </li>
            )).sort(() => Math.random() - 0.5).slice(0, 3)}
        </ul>
    )
}

export default FriendsList;