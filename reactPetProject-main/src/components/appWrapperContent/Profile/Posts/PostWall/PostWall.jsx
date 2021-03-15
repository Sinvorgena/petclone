import Post from "./Post/Post";
import s from "./PostWall.module.css";

const PostWall = (props) => {

    let postMessage = props.postMessageData
        .map(post => <Post message={post.message} like={post.likeCounter}/>)
    return (
        <div className={s.wall}>
            {postMessage}
        </div>

    )
}

export default PostWall;