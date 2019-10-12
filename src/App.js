import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		containers: [
			{ name: 'Developer', index: 0 },
			{ name: 'Business', index: 1 },
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
	render() {
		return (
			<div>
				<h1>Yury Lebedev</h1>
				<h2>Portfolio</h2>
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
				<ExperienceContainer
					open={!open ? true : false}
					details={sections[0]}
					accordion={int => this.setState({ open: int })}
				/>
				<ExperienceContainer
					open={open ? true : false}
					details={sections[1]}
					accordion={int => this.setState({ open: int })}
				/>
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
				<div className='Details'></div>
			</div>
		);
	}
}

export default App;
