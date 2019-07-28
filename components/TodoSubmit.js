import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Emoji from 'react-native-emoji';


const TodoSubmit = ({submitToDo}) => (
	<View style={styles.buttonContainer}>
		<TouchableHighlight
			underlayColor='#736002'
			style={styles.button}
			onPress={submitToDo}>
			
			<Text style={styles.submit} >
				+
			</Text>
		</TouchableHighlight>
	</View>
);

const styles = StyleSheet.create({  
	buttonContainer: {    
		alignItems: 'center',
		paddingBottom: 7  
	},  
	button: {    
		height: 50,    
		paddingLeft: 20,    
		paddingRight: 20,
		backgroundColor: '#403501',    
		width: 100,    
		marginRight: 20,    
		marginTop: 15,
		marginBottom: 15,
		borderColor: '#F2E205',
		justifyContent: 'center',    
		alignItems: 'center',
		shadowOpacity: 0.2,    
		shadowRadius: 3,    
		shadowColor: '#000000',
		shadowOffset: { 
			width: 4, 
			height: 4 
		}
	},
	submit: {    
		color: '#F2E205',    
		fontWeight: '900',
	}
});

export default TodoSubmit;