/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
	ScrollView,
  View,
	TouchableHighlight
} from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';

import styles from './styles.js';

// Formats a given date to omit times more precise than the day.
const formatDate = (date) => {
	string = date.toString().toUpperCase();
	return (string.substring(0,3) + ", " + string.substring(4, 11))
}

const changeDate = (date) => {
	console.log(date.toString())
}

export default class gymPlanner extends Component {
	constructor(props) {
		super(props);
		this.state = {currentDate: formatDate(new Date()) };
	}

  render() {
    return (
				<View style={{flex:1}}>
					<View>
						<CalendarStrip
							style={{paddingTop:25, paddingBottom: 10}}
							ref={(ref) => this.cal = ref} 
							onDateSelected={(date) => {
								this.setState({ currentDate: formatDate(date) })
							}}
							/>
						<Text style={styles.bigTitle}>{this.state.currentDate}</Text>
					</View>
					<ScrollView>
						<Text style={styles.title}>Bicep Curls</Text>
						<Text style={styles.info}>Previous week: 3 x 10 @ 40 lb</Text>

						<TextInput
							placeholder='Weight'
							style={styles.info}
							/>

					</ScrollView>

				</View>
    );
  }
}

AppRegistry.registerComponent('gymPlanner', () => gymPlanner);
