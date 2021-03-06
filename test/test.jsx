window['no-native-shim'] = true;
require('@clubajax/custom-elements-polyfill');
//
import React from 'react';
import { render } from 'react-dom';
import './test-component';
import WebComponent from '../index';

const data = [
	{
		id: 'a',
		label: 'Data'
	}, {
		id: 'b',
		label: 'Props'
	}
];

render(
	(
		<div>
			<WebComponent
                component="test-component"
                data={data}
                border
                // onClick={() => {
                //     console.log('click')
                // }}
                onLabelClick={() => {
                    console.log('label click');
                }}
                onSectionClick={() => {
                    console.log('section click');
                }}
			>
				<div>haz</div>
				<div>children</div>
			</WebComponent>
		</div>
	), document.getElementById('container')
);
