import React, { useState, useEffect } from "react";
import axios from "axios";

import { Repo } from '../../Components'

const AUser = () => {
    const [userData, setUserData] = useState({});
    const [repoData, setRepoData] = useState([]);

    let windowUrl = window.location.href.toString();
    const username = windowUrl.substring(windowUrl.indexOf("hub.netlify.app/") + 16, windowUrl.length);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                const persons = res.data;
                setUserData(persons);;

            })

        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                const persons = res.data;
                setRepoData(persons);;
            })
    }, [])

    let imgAlt = `${username}'s Profile Picture`

    while (repoData == [] || userData == {}) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }

    return (
        <div className="aUser">
            <div className="userProfile">
                <img src={userData.avatar_url} alt={imgAlt} />
                <h1 className="username">{username}</h1>
                <p>View the full profile on <a href={userData.html_url}>GitHub</a>.</p>
            </div>
            <div className="repos">
                <h2>Public Repositories</h2>
                {repoData.map(repo => (
                    <Repo title={repo.name} desc={repo.description} forks={repo.forks} stars={repo.stargazers_count} issues={repo.open_issues} link={repo.html_url} key={repo.id} />
                ))}
            </div>
        </div>
    );

}

export default AUser;
