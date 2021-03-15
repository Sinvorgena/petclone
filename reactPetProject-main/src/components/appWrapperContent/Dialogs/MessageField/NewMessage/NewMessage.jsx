import s from "./NewMessage.module.css"
import React from "react";
import {addMessageActionCreator, updNewMessageTextActionCreator} from "../../../../../redux/DialogsReducer";



let NewMessage = (props) => {
    let MessageText = React.createRef()
    let addNewMessageValue = () => {
        props.addMessage(addMessageActionCreator())

    }
    let niceScroll = (e) => {
        e.target.style.height = "5px"
        e.target.style.height = e.target.scrollHeight + "px"
    }
    let newTextMessage = () => {
        props.updNewMessageText(updNewMessageTextActionCreator(MessageText.current.value))

    }
    return (
        <div className={s.newMessage}>
                <textarea className={s.textField}
                          id={"textFieldId"}
                          placeholder={"Write a message..."}
                          onInput={niceScroll}
                          ref={MessageText}
                          onKeyPress={(e) => {
                                if (e.key == "Enter") {
                                    addNewMessageValue()
                                }
                         }}value={props.NewMessageText}
                          onChange={newTextMessage}/>
            <button className={s.sendNewMessage}
                    onClick={addNewMessageValue}></button>
        </div>

    )
}


export default NewMessage;