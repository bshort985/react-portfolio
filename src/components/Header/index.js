import React from "react";

function Header(props) {
    return (
        <header>
            <h1>Brian Short</h1>
            {/* Add Image Here */}
            {props.children}
        </header>
    );
}

export default Header;