import React, { Component } from 'react';
import { Header, ProjectLink } from './GeneralComponents';
import { DEV, BIZ } from './data';
import './css/App.css';
import './css/Items.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containers: [
        { name: 'Developer', index: 0, data: DEV },
        { name: 'Business', index: 1, data: BIZ },
      ],
      open: 0,
      windowWidth: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0 });
  }

  switchExp() {
    const { open } = this.state;
    this.setState({ open: open ? 0 : 1 });
  }

  render() {
    const sections = this.state.containers;
    const { open, windowWidth } = this.state;
    return (
      <div className="App">
        <Header switch={() => this.switchExp()} />
        <div className="SectionWrapper">
          <ExperienceContainer details={sections[open]} width={windowWidth} />
        </div>
      </div>
    );
  }
}

class ExperienceContainer extends Component {
  render() {
    let { details, width } = this.props;
    return (
      <div className="ExperienceContainer">
        {details.data.map(el => (
          <Item key={el.expName} {...el} width={width} />
        ))}
      </div>
    );
  }
}

const phoneItem = {
  flex: 1,
  minHeight: '300px',
  borderBottom: '1px solid #000000',
};

class Item extends Component {
  state = { mouseOver: false };

  render() {
    const { props } = this;
    const { mouseOver } = this.state;
    return (
      <div
        style={props.width > 600 ? props.class : phoneItem}
        onMouseEnter={() => {
          this.setState({ mouseOver: true });
        }}
        onMouseLeave={() => {
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
      <div className={`Item ${props.width <= 600 ? 'ItemHover' : ''}`}>
        <h4 className="ItemTitle">{props.expName}</h4>
        <div className="ProjectLinksContainer">
          {props.links.map(el => {
            return <ProjectLink key={el.href} {...el} />;
          })}
        </div>
        <label className="Description">{props.expDetails}</label>
        <div className="Skills">
          {props.techStack.map(el => (
            <Skill key={el} skill={el} />
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
            <Skill key={el} skill={el} />
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
