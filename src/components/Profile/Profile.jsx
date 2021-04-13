import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, profile}) => {
    return (
        <>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts}/>
        </>
    )
}

export default Profile;