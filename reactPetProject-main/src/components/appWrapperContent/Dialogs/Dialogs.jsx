import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageField/MessagesItem";
import NewMessage from "./MessageField/NewMessage/NewMessage";

let Dialogs = (props) => {
    let dialogItemData = props.DialogsState.dialogsData.map(el =>
        (<DialogItem
            name={el.name}
            id={el.id}
        />))
    let MessagesFieldData = props.DialogsState.messageData.map(el =>
        (<MessagesItem
            message={el.message}
            img={el.avatar}
        />))

    return (
        <div className={s.content}>
            <div className={s.dialogsItem}>
                {dialogItemData}
            </div>
            <div className={s.MessagesField}>
                {MessagesFieldData}
                <NewMessage
                    addMessage={props.dispatch}
                    updNewMessageText={props.dispatch}
                    NewMessageText={props.DialogsState.newMessageText}
                />
            </div>
        </div>
    )
}


export default Dialogs;