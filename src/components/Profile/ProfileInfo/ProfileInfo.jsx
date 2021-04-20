import s from './ProfileInfo.module.scss';

const ProfileInfo = ({profile}) => {
    return (
        <div className={s.profile}>
            <div className={s.profileAvatar}>
                <img src={profile.img} alt=""/>
                <p>
                    <span>{profile.name} </span>
                    <span>{profile.lastName}</span>
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;