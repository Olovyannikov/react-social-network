import profileImg from "../../assets/img/profile.jpg";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({posts}) => {
    return (
        <>
            <div className={s.profile}>
                <div className={s.profileAvatar}>
                    <img src={profileImg} alt=""/>
                    <p>Quan Ha</p>
                </div>
            </div>
            <MyPosts posts={posts}/>
        </>
    )
}

export default Profile;