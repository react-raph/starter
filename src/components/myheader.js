import React from "react";

const MyHeader = (props) => (
    <header>
        <h1>{props.title}</h1>
        <div className="description">
            {props.children}
        </div>
    </header>
)

export default MyHeader;