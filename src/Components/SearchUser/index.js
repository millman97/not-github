import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
    const [queryInput, setQueryInput] = useState('');

    let navigate = useNavigate();
    const routeChange = (username) => {
        let path = `/${username}`;
        navigate(path);
    }

    const handleInput = (e) => {
        setQueryInput(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        routeChange(queryInput)
        setQueryInput('');
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type='text'
                    id='search'
                    placeholder="Enter your GitHub username..."
                    value={queryInput}
                    style={{ display: 'inline-block', width: '60vw', height:'10vh', padding: '25px 20px 25px 20px', fontSize: '30px', borderRadius: '50px' }}
                    onChange={handleInput}
                />
                <input type='submit' value='Submit' style={{ display: 'none' }} />
            </form>
        </>
    )
}

export default SearchUser;
