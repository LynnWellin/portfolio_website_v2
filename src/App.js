import React, { Component } from 'react';
import { Header, ProjectLink } from './GeneralComponents';
import { DEV, BIZ } from './data';
import './css/App.css';
import './css/Items.css';

class App extends Component {
  state = {
    containers: [
      { name: 'Developer', index: 0, data: DEV },
      { name: 'Business', index: 1, data: BIZ },
    ],
    open: 0,
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
        {details.data.map(el => (
          <Item {...el} />
        ))}
      </div>
    );
  }
}

class Item extends Component {
  state = { mouseOver: false };

  componentWillUnmount() {
    console.log('unmounting');
  }

  render() {
    const { props } = this;
    console.log(props.class);
    const { mouseOver } = this.state;
    return (
      <div
        style={props.class}
        onMouseEnter={() => {
          console.log('enter', props.expName);
          this.setState({ mouseOver: true });
        }}
        onMouseLeave={() => {
          console.log('leave ', props.expName);
          this.setState({ mouseOver: false });
        }}
      >
        {mouseOver ? <Detailed {...props} /> : <Summary {...props} />}
      </div>
    );
  }
}

class Detailed extends Component {
  render() {
    const { props } = this;
    return (
      <div className="Item">
        <h4 className="ItemTitle">{props.expName}</h4>
        <div className="ProjectLinksContainer">
          {props.links.map(el => {
            return <ProjectLink {...el} />;
          })}
        </div>
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

class Summary extends Component {
  render() {
    const { props } = this;
    return (
      <div className="Item">
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
