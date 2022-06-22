import React from "react";
import { SearchUser } from '../../Components'

const Home = () => {
    return (
        <div className="homeDiv">
            <h1>Not GitHub</h1>
            <h3>GitHub user repo search app</h3>
            <SearchUser />
        </div>
    );
}

export default Home;
