import React, { useState } from "react";

const Food = (props) => {

    const [tried, setTried] = useState(false);

    const onDelete = () => {
        props.deleteFood(props.food);
    };

    return (
    <li className={tried && 'gray'} onClick={() => setTried(!tried)}>
        <span className={tried && 'strike'}>{props.food}</span>
        <span className="delete" onClick={onDelete}>
            X
        </span>
    </li>
    );
};

export default Food;