import {NavLink} from "react-router-dom";
import s from "./MessageItem.module.scss";

const MessageItem = ({messages}) => messages.map(message => {
        return (
            <li key={message.id}>
                <NavLink className={s.messageItem  }  activeClassName={s.active} to={`/messages/${message.id}`}>
                    <img src={message.src} alt={message.alt}/>
                    <div className={s.messagePreview}>
                        <span>{message.name}</span>
                        <p>{message.message}</p>
                    </div>
                </NavLink>
            </li>
        )
    }
)

export default MessageItem;