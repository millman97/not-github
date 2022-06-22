import React from "react";

const AUser = () => {
    let windowUrl = window.location.href.toString();
    const username = windowUrl.substring(windowUrl.indexOf("/localhost:3000/") + 16, windowUrl.length);

    let imgAlt = `${username}'s Profile Picture`
    return(
        <div className="aUser">
            <div className="userProfile">
                <img src="#" alt={imgAlt} />
                <h1 className="username">{username}</h1>
            </div>
            <h2>Repositories</h2>
            <div className="repos">
                
            </div>
        </div>
    );
}

export default AUser;
