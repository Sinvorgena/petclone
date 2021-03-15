import NewPosts from "./NewPosts/NewPosts";
import PostWall from "./PostWall/PostWall";
import s from "./posts.module.css"


let Posts = (props) => {
    return (
        <div className={s.content}>
            <NewPosts
                addPost={props.addPost}
                updNewPostText={props.updNewPostText}
                newPostText={props.newPostText}
            />
            <PostWall
                postMessageData={props.postMessageData}
            />
        </div>
    )
}

export default Posts;