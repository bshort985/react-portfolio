import React from "react";

function Footer() {

    const links = [
        {
            name: "GitHub",
            link: "https://github.com/bshort985"
        },
        {
            name: "LinkedIn",
            link: "linkedin.com/in/brian-short-7603a6142" 
        },
        // {
        //     name: "Facebook",
        //     link: ""
        // }
    ]
    return (
        <footer>
            {links.map(links =>
                (
                    <a href={links.link} key={links.name} target="_blank" rel="noopener noreferrer"><i className={links.name}></i></a>
                ))};
        </footer>
    );

}

export default Footer;