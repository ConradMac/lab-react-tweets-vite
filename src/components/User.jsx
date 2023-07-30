import React from "react";

function User(props) {
    // return <div>{props.tweet.user.name}</div>;
    return (
        <div>
            {props.name} {props.handle}
        </div>
    );
}

export default User;
