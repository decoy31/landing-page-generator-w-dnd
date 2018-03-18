import React from 'react';
import Picker from './LayoutPicker/Picker';

import './LayoutPicker.css';

export default function LayoutPicker (props) {
	return (
		<section className="LayoutPicker">
			<Picker {...props} />
		</section>
	);
}