import React from "react";

const Item = ({ width, height, children, animated }) => {
    return (
        <div
            className={`card mb-3 item animate__animated ${animated}`}
            style={{ width, height }}
        >
            <div className="card-body">{children}</div>
        </div>
    );
};

export default Item;
