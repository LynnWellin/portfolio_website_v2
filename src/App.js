import React, { Component } from 'react';
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

class Header extends Component {
	state = {
		links: [
			{
				key: 'LinkedIn',
				link: 'https://www.linkedin.com/in/yuryl/',
				image: require('./Images/LI-Logo.png'),
			},
			{
				key: 'LeetCode',
				link: 'https://leetcode.com/lynnwellin/',
				image: require('./Images/LeetCode_nav.4d940ca72.png'),
			},
		],
	};

	render() {
		let { links } = this.state;
		return (
			<div className='Header'>
				<div>
					<h1>Yury Lebedev</h1>
					<h2>Portfolio</h2>
				</div>
				<div className='HeaderLinks'>
					<EmailContact />
					{links.map(el => (
						<FooterLink {...el} />
					))}
				</div>
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
				{sections.map((el, index) => (
					<ExperienceContainer
						details={el}
						open={index === open}
						accordion={int => this.setState({ open: int })}
					/>
				))}
			</div>
		);
	}
}

class ExperienceContainer extends Component {
	render() {
		let { details, open } = this.props;
		return (
			<div className={open ? 'ExperienceContainer' : 'ClosedSection'}>
				{this.props.open ? (
					<ExperienceDetails details={details} />
				) : (
					<div onClick={() => this.props.accordion(details.index)}>
						<h2 className='SectionName'>{details.name}</h2>
					</div>
				)}
			</div>
		);
	}
}

class ExperienceDetails extends Component {
	render() {
		let { details } = this.props;
		return (
			<div className='ExperienceDetails'>
				<div className='OpenSectionHeader'>
					<h2 className='OpenSectionName'>
						{details.name + ': Details'}
					</h2>
				</div>
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

class EmailContact extends Component {
	render() {
		return (
			<a
				href='mailto:y.d.lebedev@gmail.com?Subject=Contact%20From%20Portfolio%20Website'
				className='EmailContactContainer'
			>
				<label>Contact</label>
			</a>
		);
	}
}

class FooterLink extends Component {
	render() {
		return (
			<a className='HeaderLink' href={this.props.link}>
				<img
					className='LinkImage'
					src={this.props.image}
					alt={this.props.key}
				/>
			</a>
		);
	}
}

export default App;
