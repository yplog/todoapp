import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'


const TodoInput = ({ inputValue, inputChange }) => (
	<View style={styles.inputContainer}>
		<TextInput style={styles.input} 
		value={inputValue}
		placeholder='ADD TO-DO...' 
		placeholderTextColor='#F2E205'
		selectionColor='#F2E205' 
		onChangeText={inputChange}
		/>
	</View>
);

const styles = StyleSheet.create({
  inputContainer: {
		marginLeft: 20,    
		marginRight: 20,    
		paddingTop: 5,
		shadowOpacity: 0.2,    
		shadowRadius: 3,    
		shadowColor: '#000000',    
		shadowOffset: { 
			width: 4, 
			height: 4 
		}  
	},  
	input: {    
		height: 60,    
		backgroundColor: '#403501',
		color: '#F2E205',
		fontWeight: '800',
		paddingLeft: 10,    
		paddingRight: 10,
		textAlign: "center"
	}
});

export default TodoInput;