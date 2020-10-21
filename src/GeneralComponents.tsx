import React from 'react';
import Octicon, { MarkGithub, LinkExternal } from '@primer/octicons-react';
import './css/Switch.css';
import { IPorfileLink, Link, LINKS } from 'data';
import styled from '@emotion/styled';
import { flexColumn, flexWrap, fadeIn } from 'styles';

const HeaderWrapper = styled.div`
    ${flexColumn}
    align-items: center;
    color: whitesmoke;
    padding: 5px;
`;

const LinksContainer = styled.div`
    ${flexWrap}
    justify-content: space-around;
    align-items: center;
`;

const HeaderLink = styled.a`
    &:link {
        color: #61dafb;
        margin: 4px;
    }
    &:visited {
        color: #61dafb;
    }
`;

const GithubLink = styled.a`
    margin: 10px;
    text-decoration: none;
    color: white;
`;

export function Header({ changeType }: { changeType: () => void }) {
    return (
        <HeaderWrapper>
            <h1>Yury Lebedev</h1>
            <h2>Portfolio</h2>
            <Toggle changeType={changeType} />
            <LinksContainer>
                <EmailContact />
                {LINKS.map((el) => (
                    <FooterLink key={el.type} {...el} />
                ))}
                <GithubLink href="https://github.com/lebedevy">
                    <Octicon icon={MarkGithub} size="medium" />
                </GithubLink>
            </LinksContainer>
        </HeaderWrapper>
    );
}

function Toggle({ changeType }: { changeType: () => void }) {
    return (
        <div className="ToggleDiv">
            <label>Developer</label>
            <input type="checkbox" className="ExpSelect" onChange={changeType} />
            <label>Business</label>
        </div>
    );
}

const EmailContainer = styled.a`
    cursor: pointer;
    margin: 10px;
    padding: 5px 15px;
    border-radius: 30px;
    background-color: whitesmoke;
    text-decoration: none;
    color: #282c34;
    font-weight: bold;
    user-select: none;
    transition: all 0.5s;
    &:hover {
        background-color: #515868;
        color: whitesmoke;
    }
`;

const LinkText = styled.label`
    cursor: pointer;
`;

function EmailContact() {
    return (
        <EmailContainer
            href="mailto:y.d.lebedev@gmail.com?Subject=Contact%20From%20Portfolio%20Website"
            className="EmailContactContainer"
        >
            <LinkText>Contact</LinkText>
        </EmailContainer>
    );
}

const LinkImage = styled.img`
    margin: 10px;
    height: 25px;
`;

function FooterLink({ image, type, link }: IPorfileLink) {
    return (
        <HeaderLink href={link}>
            <LinkImage src={image} alt={type} />
        </HeaderLink>
    );
}

const ProjectLinkContainer = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
    opacity: 0;
    animation: ${fadeIn} 1.5s forwards;
`;

export function ProjectLink({ type, href }: Link) {
    let icon;
    switch (type) {
        case 'github':
            icon = MarkGithub;
            break;
        default:
            icon = LinkExternal;
            break;
    }

    return (
        <ProjectLinkContainer href={href}>
            <Octicon icon={icon} size="medium" />
        </ProjectLinkContainer>
    );
}
