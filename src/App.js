import React, { Component } from 'react';
import { Header } from './GeneralComponents';
import { DEV, BIZ } from './data';
import './App.css';
import './Items.css';

class App extends Component {
	state = {
		containers: [
			{ name: 'Developer', index: 0, data: DEV },
			{ name: 'Business', index: 1, data: BIZ },
		],
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<SectionWrapper sections={this.state.containers} />
			</div>
		);
	}
}

class SectionWrapper extends Component {
	state = { open: 0 };

	render() {
		let { open } = this.state;
		let { sections } = this.props;
		return (
			<div className='SectionWrapper'>
				<div className='SectionHeader'>
					{sections.map((el, index) => (
						<div
							className={
								'SectionName' +
								(index === open ? ' SelectedSN' : '')
							}
							onClick={() => this.setState({ open: index })}
						>
							<h2>{el.name}</h2>
						</div>
					))}
				</div>
				<ExperienceContainer details={sections[open]} />
			</div>
		);
	}
}

class ExperienceContainer extends Component {
	render() {
		let { details } = this.props;
		return (
			<div className='ExperienceContainer'>
				<ExperienceDetails details={details} />
			</div>
		);
	}
}

class ExperienceDetails extends Component {
	render() {
		let { details } = this.props;
		return (
			<div className='ExperienceDetails'>
				<div className='Details'>
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
		'background-position': 'center',
		'background-size': 'cover',
	};

	render() {
		let { props } = this;
		return (
			<div className={props.class + ' Item'} style={this.backgroundStyle}>
				<h4 className='ItemTitle'>{props.expName}</h4>
				<p>{props.expDetails}</p>
				{props.techStack.map(el => (
					<Skill skill={el} />
				))}
			</div>
		);
	}
}

class Skill extends Component {
	render() {
		return (
			<div className='Skill'>
				<label>{this.props.skill}</label>
			</div>
		);
	}
}

export default App;
