import s from './Messages.module.scss';
import MessageItem from "./MessageItem/MessageItem";
import Message from "./Message/Message";

const Messages = ({messages}) => {

    return (
        <>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    <MessageItem messages={messages}/>
                </ul>
                <Message messages={messages}/>
            </div>
        </>
    )
}

export default Messages;