import React from "react";

function ProfileImage(props) {
    return <img src={props.image} alt="profile" className="profile" />;
    // return <img src={props.tweet.user.image} alt="profile" className="profile" />;
}

export default ProfileImage;
