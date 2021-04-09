import s from './Messages.module.scss';
import {NavLink} from "react-router-dom";

const Messages = ({messages}) => {

    const dialogsList = messages.map(message => {
        return (
            <li key={message.id}>
                <NavLink activeClassName={s.active} to={`/messages/${message.id}`}>
                    <img src={message.src} alt={message.alt}/>
                    <span>{message.name}</span>
                </NavLink>
            </li>
        )
    })

    return (
        <>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {dialogsList}
                </ul>
                <div className={s.messagesDialog}>
                    {messages[0].message}
                </div>
            </div>
        </>
    )
}

export default Messages;