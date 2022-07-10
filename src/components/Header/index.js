import React from "react";
import coverPic from "../../assets/img/cover.jpg"

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Brian Short</h1>
            <img src={coverPic}  alt="bridge"></img>
            {props.children}
        </header>
    );
}

export default Header;