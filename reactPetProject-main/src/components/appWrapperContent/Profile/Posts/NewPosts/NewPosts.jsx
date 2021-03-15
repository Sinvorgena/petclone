import s from "./NewPosts.module.css"
import React from "react";
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../../../redux/ProfileReducer";



let NewPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost(addPostActionCreator())
    }
    let niceScroll = (e) => {
        e.target.style.height = "5px"
        e.target.style.height = e.target.scrollHeight + "px"
    }
    let newTextPost = () => {
        props.updNewPostText(updNewPostTextActionCreator(newPostElement.current.value))
    }

    return (
        <form className={s.form}>
            <label
                htmlFor={"textFieldId"}
                className={s.textFieldLabel}>My posts</label>

            <textarea className={s.textField}
                      placeholder={"your news..."}
                      onInput={niceScroll}
                      ref={newPostElement}
                      onChange={newTextPost}
                      value={props.newPostText}
                      id={"textFieldId"}/>

            <button className={s.sendBtn}
                    type={"button"}
                    onClick={addPost}>Send</button>
        </form>
    )
}

export default NewPosts;