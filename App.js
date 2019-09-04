import React from 'react';
import { AppRegistry } from 'react-native';
import {Main} from './app/Main';

export default class App extends React.Component {
	render() {
		return <Main />;
	}
}

AppRegistry.registerComponent('AwesomeProject1', () => app);