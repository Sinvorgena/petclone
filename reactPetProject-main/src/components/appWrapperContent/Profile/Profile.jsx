import MainScreen from "./MainScreen/MainScreen"
import UserProfile from "./UserProfile/UserProfile";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css"


let Profile = (props) => {
    return (
        <div className={s.content}>
            <MainScreen/>
            <UserProfile
                changeAvatar={props.dispatch}
                mainAvatar={props.ProfileState.mainAvatar}
                addAvatar={props.dispatch}
                avatarUrlData={props.ProfileState.avatarUrlData}
                userInfoDate={props.ProfileState.userInfoDate}/>
            <Posts
                postMessageData={props.ProfileState.postMessageData}
                newPostText={props.ProfileState.newPostText}

                addPost={props.dispatch}
                updNewPostText={props.dispatch}
            />
        </div>
    )
}

export default Profile;