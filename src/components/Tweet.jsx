import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
    console.log(props);
    return (
        <div className="tweet">
            {/* <img src={props.tweet.user.image} className="profile" alt="profile" /> 
on invoke ici les images en faisant appel au composant.*/}
            <ProfileImage image={props.tweet.user.image} />

            <div className="body">
                <div className="top">
                    <span className="user">
                        <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
                    </span>

                    {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
                    <span className="timestamp">
                        <Timestamp time={props.tweet.timestamp}></Timestamp>
                    </span>
                </div>

                {/* <p className="message">{props.tweet.message} 🚀</p> */}
                <p className="message">
                    <Message message={props.tweet.message}></Message> 🚀
                </p>

                {/* <div className="actions">
                    Font Awesome icons
                    <i className="far fa-comment"></i>
                    <i className="fas fa-retweet"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i> 
                </div> */}
                <Actions></Actions>
            </div>

            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

// function App() {
//     return (
//         <div className="App">
//             {tweetsArray.map((tweet, index) => (
//                 <Tweet key={index} tweet={tweet} />
//             ))}
//         </div>
//     );
// }

export default Tweet;
