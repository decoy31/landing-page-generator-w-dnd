import React, { Component } from "react";

import './Editor.css';

export default class Editor extends Component {
	render () {
		return (
			<section className="Editor" contentEditable={true}>
			</section>
		);
	}
}