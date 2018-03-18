import React, { Component } from 'react';
import LayoutPicker from './components/LayoutPicker';
import Editor from './components/Editor';

//import logo from './logo.svg';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>Landing Page Generator</h1>
				</header>
				<div className="content">
					<LayoutPicker />
					<Editor />
				</div>
			</div>
		);
	}
};
