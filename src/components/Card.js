// JavaScript source code
import React from 'react';

const card = ({ name, email, id }) => {
    return (
        <div className= 'tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
        < img className = 'grow bw24' src = {`https://robohash.org/${id}size=150x150`}
            alt = 'robot' />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    );
}

export default card;