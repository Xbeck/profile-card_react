import './UserProfile.css'


function UserProfile({ name, email }) {
    const mailto = `mailto:${email}`
    return (
        <div className="user-info" >
            <h2 className="profile-name" >{name}</h2>
            <h2 className="profile-email" >
                <a href={mailto}>{name}</a>
            </h2>
        </div>
    );
};

export default UserProfile;
