import ProfileCard from "./ProfileCard";

function Profiles({ users }) {
    return users.map( (user, index) => {
        return <ProfileCard key={index} user={user} />;
    });
}

export default Profiles;