import s from './Messages.module.scss';
import MessageItem from "./MessageItem/MessageItem";

const Messages = ({messages}) => {

    return (
        <>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    <MessageItem messages={messages}/>
                </ul>
                <div className={s.messagesDialog}>
                    {messages.map(message => <p key={message.id}>{message.message}</p>)}
                </div>
            </div>
        </>
    )
}

export default Messages;