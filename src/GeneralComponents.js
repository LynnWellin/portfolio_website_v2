import React, { Component } from "react";
import Octicon, { MarkGithub, LinkExternal } from "@primer/octicons-react";
import "./css/Header.css";

const links = [
  {
    key: "LinkedIn",
    link: "https://www.linkedin.com/in/yuryl/",
    image: require("./Images/LI-Logo.png")
  },
  {
    key: "LeetCode",
    link: "https://leetcode.com/lynnwellin/",
    image: require("./Images/LeetCode_nav.4d940ca72.png")
  }
];

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Yury Lebedev</h1>
        <h2>Portfolio</h2>
        <div className="ToggleDiv">
          <label>Developer</label>
          <input
            type="checkbox"
            className="ExpSelect"
            onChange={this.props.switch}
          />
          <label>Business</label>
        </div>
        <div className="HeaderLinks">
          <EmailContact />
          {links.map(el => (
            <FooterLink {...el} />
          ))}
          <a className="GithubLink" href="https://github.com/LynnWellin">
            <Octicon icon={MarkGithub} size="medium" />
          </a>
        </div>
      </div>
    );
  }
}

class EmailContact extends Component {
  render() {
    return (
      <a
        href="mailto:y.d.lebedev@gmail.com?Subject=Contact%20From%20Portfolio%20Website"
        className="EmailContactContainer"
      >
        <label>Contact</label>
      </a>
    );
  }
}

class FooterLink extends Component {
  render() {
    return (
      <a className="HeaderLink" href={this.props.link}>
        <img
          className="LinkImage"
          src={this.props.image}
          alt={this.props.key}
        />
      </a>
    );
  }
}

class ProjectLink extends Component {
  render() {
    const { type, href } = this.props;
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
}

export { Header, ProjectLink };
