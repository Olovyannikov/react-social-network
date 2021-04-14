import s from "../Messages.module.scss";

const Message = ({messages}) => {
    return (
        <div className={s.messagesDialog}>
            {messages.map(message => <p key={message.id}>{message.message}</p>)}
        </div>
    )
}

export default Message;