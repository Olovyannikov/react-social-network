import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({data}) => {
    const {user, posts} = data;
    return (
        <>
            <ProfileInfo profile={user}/>
            <MyPosts posts={posts}/>
        </>
    )
}

export default Profile;