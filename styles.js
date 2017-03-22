import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bigTitle: {
		textAlign: 'center',
		fontSize: 25,
		fontWeight: 'bold',
		paddingBottom: 10,
	},

	title: {

		textAlign: 'left',
		fontSize:20, 
		fontWeight: 'bold',
		paddingLeft: 20,
	},

	info: {
		textAlign: 'left',
		fontSize: 15,
		fontWeight: 'normal',
		paddingLeft: 20,
	},

	input: {
		textAlign: 'left',
		fontSize: 15,
		fontWeight: 'normal',
		marginLeft: 20,
		marginBottom: 10,
		paddingLeft: 5,
		height: 25,
		width: 200,
		borderWidth: 1,
	},

	inputButton: {
		marginLeft: 20,
		marginBottom: 10,
		paddingLeft: 5,
		height: 25,
		width: 100,
		borderWidth: 1,
	},
});

module.exports = styles


