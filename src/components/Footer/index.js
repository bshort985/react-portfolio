import React from "react";

function Footer() {

    const links = [
        {
            name: "GitHub",
            link: "https://github.com/bshort985"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/brian-short-7603a6142/" 
        },
        {
            name: "Email",
            link: "mailto:bshort985@gmail.com"
        }
    ]
    return (
        <footer>
            {links.map(links =>
                (
                    <a className="flex-row px-1" href={links.link} key={links.name} target="_blank" rel="noopener noreferrer"><i>{links.name}</i></a>
                ))}
        </footer>
    );

}

export default Footer;