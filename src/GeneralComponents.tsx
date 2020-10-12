import React from "react";
import Octicon, { MarkGithub, LinkExternal } from "@primer/octicons-react";
import "./css/Header.css";
import { IPorfileLink, Link, LINKS } from "data";

export function Header({ changeType }: { changeType: () => void }) {
    return (
        <div className="Header">
            <h1>Yury Lebedev</h1>
            <h2>Portfolio</h2>
            <div className="ToggleDiv">
                <label>Developer</label>
                <input
                    type="checkbox"
                    className="ExpSelect"
                    onChange={changeType}
                />
                <label>Business</label>
            </div>
            <div className="HeaderLinks">
                <EmailContact />
                {LINKS.map((el) => (
                    <FooterLink key={el.type} {...el} />
                ))}
                <a className="GithubLink" href="https://github.com/LynnWellin">
                    <Octicon icon={MarkGithub} size="medium" />
                </a>
            </div>
        </div>
    );
}

function EmailContact() {
    return (
        <a
            href="mailto:y.d.lebedev@gmail.com?Subject=Contact%20From%20Portfolio%20Website"
            className="EmailContactContainer"
        >
            <label>Contact</label>
        </a>
    );
}

function FooterLink({ image, type, link }: IPorfileLink) {
    return (
        <a className="HeaderLink" href={link}>
            <img className="LinkImage" src={image} alt={type} />
        </a>
    );
}

export function ProjectLink({ type, href }: Link) {
    let icon;
    switch (type) {
        case "github":
            icon = MarkGithub;
            break;
        default:
            icon = LinkExternal;
            break;
    }

    return (
        <a className="ProjectLink" href={href}>
            <Octicon icon={icon} size="medium" />
        </a>
    );
}
