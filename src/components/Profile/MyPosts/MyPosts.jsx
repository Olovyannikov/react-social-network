import s from './MyPosts.module.scss';
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

    return (
        <div>
            <h2>My posts</h2>
            <textarea placeholder='Введите текст нового поста...' className={s.textarea}/>
            <button className={s.newPost}>new post</button>

            <Post posts={posts}/>
        </div>
    )
}

export default MyPosts;