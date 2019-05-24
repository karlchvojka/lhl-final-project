import React from 'react';

const Card = (props) => {
    const { budget } = props;
    return (
        <div>
            <p>{budget.id}</p>
            <p>{budget.name}</p>
            <p>{budget.total}</p>
        </div>
    )
}

export default Card;
