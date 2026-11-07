import "./Avatar.css"

function Avatar({ name, url }) {
    return (
        <div>
            <img className='profile-avatar' src={url} alt={name} />
        </div>
    );
};

export default Avatar;