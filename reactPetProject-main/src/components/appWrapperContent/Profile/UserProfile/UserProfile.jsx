import s from "./UserProfile.module.css"
import UserInfo from "./UserInfo/UserInfo";
import React from "react";
import {
    addAvatarActionCreator,
    changeAvatarActionCreator,
    nextAvatarActionCreator,
    prevAvatarActionCreator
} from "../../../../redux/ProfileReducer";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";



let UserProfile = (props) => {
    let avatarBox = React.createRef()
    let avatarElement = React.createRef()
    let urlInput = React.createRef()
    let addBtn = React.createRef()
    let nextBtn = React.createRef()
    let prevBtn = React.createRef()
    let allAvatarElement = React.createRef()



    let allAvatar =
        props.avatarUrlData.map(el=><ChangeAvatar avatarUrl = {el.url} />
        )
    let addAvatar = ()=> {
        props.addAvatar(addAvatarActionCreator(urlInput.current.value))
    }
    let changeAvatar = ()=> {
        props.changeAvatar(changeAvatarActionCreator())
        if(urlInput.current.style.opacity === "1" && allAvatarElement.current.style.opacity === "1" && addBtn.current.style.opacity === "1" && nextBtn.current.style.opacity === "1" && prevBtn.current.style.opacity === "1"){
            allAvatarElement.current.style.opacity ="0"
            nextBtn.current.style.opacity = "0"
            prevBtn.current.style.opacity = "0"
            addBtn.current.style.opacity = "0"
            urlInput.current.style.opacity = "0"
        } else {
            allAvatarElement.current.style.opacity ="1"
            addBtn.current.style.opacity = "1"
            urlInput.current.style.opacity = "1"
            nextBtn.current.style.opacity = "1"
            prevBtn.current.style.opacity = "1"
        }
    }
    let nextAvatar = ()=>{
        props.changeAvatar(nextAvatarActionCreator(avatarElement.current.attributes.src.nodeValue))
    }
    let prevAvatar = ()=>{
        props.changeAvatar(prevAvatarActionCreator(avatarElement.current.attributes.src.nodeValue))
    }

    let userInfo = props.userInfoDate
        .map(el => <UserInfo
            name={el.name}
            birthdate={el.birthdate}
            city={el.city}
            education={el.education}
            webSite={el.webSite}/>)
    return (
        <div className={s.content}>
            <div className={s.avatarBox} ref={avatarBox}>
                <div className={s.avatar}   onClick={changeAvatar}>
                    <img ref={avatarElement} src={props.mainAvatar} alt=""/>
                </div>
                <div className={s.allAvatar} ref={allAvatarElement}>{allAvatar}</div>
                <input type="text" placeholder={"New avatar url..."} className={s.urlInput} ref={urlInput}/>
                <button className={s.prevBtn} onClick={prevAvatar} ref={prevBtn}>prev</button>
                <button className={s.nextBtn} onClick={nextAvatar} ref={nextBtn}>next</button>
                <button className={s.addBtn} onClick={addAvatar} ref={addBtn}>add</button>
            </div>

            {userInfo}
        </div>
    )
}

export default UserProfile;



