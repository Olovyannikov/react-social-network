import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './Post.module.scss';

const Post = ({posts}) => {

    let item = posts.map(post => {
        return (
            <div key={post.id} className={s.item}>
                <div className={s.itemAvatar}>
                    <img src={post.src} alt={post.alt}/>
                    <div className={s.likes}>
                        <button>
                            <FontAwesomeIcon color={'red'} icon={faHeart}/>
                            <div className={s.likesCount}>{post.likes}</div>
                        </button>
                    </div>
                </div>
                <div className="itemPost">
                <p>{post.message}</p>

                </div>
            </div>
        )
    })


    return item
}

export default Post;