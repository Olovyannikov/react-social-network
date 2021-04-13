import s from './ProfileInfo.module.scss';

const ProfileInfo = ({profile}) => {
    return (
        <div className={s.profile}>
            <div className={s.profileAvatar}>
                <img src={profile[0].img} alt=""/>
                <p>
                    <span>{profile[0].name} </span>
                    <span>{profile[0].lastName}</span>
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;