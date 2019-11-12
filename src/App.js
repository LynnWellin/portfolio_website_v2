import React, { Component } from "react";
import { Header } from "./GeneralComponents";
import { DEV, BIZ } from "./data";
import "./App.css";
import "./Items.css";

class App extends Component {
  state = {
    containers: [
      { name: "Developer", index: 0, data: DEV },
      { name: "Business", index: 1, data: BIZ }
    ],
    open: 0
  };

  swithExp() {
    const { open } = this.state;
    this.setState({ open: open ? 0 : 1 });
  }

  render() {
    const sections = this.state.containers;
    const { open } = this.state;
    return (
      <div className="App">
        <Header switch={() => this.swithExp()} />
        <div className="SectionWrapper">
          <ExperienceContainer details={sections[open]} />
        </div>
      </div>
    );
  }
}

class ExperienceContainer extends Component {
  render() {
    let { details } = this.props;
    return (
      <div className="ExperienceContainer">
        <ExperienceDetails details={details} />
      </div>
    );
  }
}

class ExperienceDetails extends Component {
  render() {
    let { details } = this.props;
    return (
      <div className="ExperienceDetails">
        <div className="Details">
          {details.data.map(el => (
            <Item {...el} />
          ))}
        </div>
      </div>
    );
  }
}

class Item extends Component {
  backgroundStyle = {
    backgroundImage: `url("${this.props.background}")`,
    "background-position": "center",
    "background-size": "cover"
  };

  render() {
    let { props } = this;
    return (
      <div className={props.class + " Item"} style={this.backgroundStyle}>
        <h4 className="ItemTitle">{props.expName}</h4>
        <label className="Description">{props.expDetails}</label>
        <div className="Skills">
          {props.techStack.map(el => (
            <Skill skill={el} />
          ))}
        </div>
      </div>
    );
  }
}

class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <label>{this.props.skill}</label>
      </div>
    );
  }
}

export default App;
