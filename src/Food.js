import React, { useState } from "react";

const Food = ({ food, deleteFood }) => {

    const [tried, setTried] = useState(false);

    return (
    <li className={tried && 'gray'} onClick={() => setTried(!tried)}>
        <span className={tried && 'strike'}>{food}</span>
        <span className="delete" onClick={() => deleteFood(food)}>
            X
        </span>
    </li>
    );
};

export default Food;