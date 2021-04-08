import profileImg from "../../assets/img/profile.jpg";
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <main className={'content'}>
            <div className={s.profile}>
                <div className={s.profileAvatar}>
                    <img src={profileImg} alt=""/>
                    <p>Quan Ha</p>
                </div>
            </div>
            <div>
                <p>POSTS</p>
                <button>new post</button>
                <p>post1</p>
                <p>post2</p>
            </div>

        </main>
    )
}

export default Profile;