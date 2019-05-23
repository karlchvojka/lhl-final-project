import React from 'react';

const Card = (props) => {
    const { user } = props;
    return (
        <div>
            <p>{user.first} {user.last}</p>
            <p>{user.email}</p>
            <p>{user.id}</p>
        </div>
    )
}

export default Card;
