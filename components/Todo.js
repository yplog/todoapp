import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import TodoOptionsButton from './TodoOptionsButton'


const Todo = ({ todo, toggleComplete, deleteTodo }) => (  
	<View style={styles.todoContainer}>    
		<Text style={[      
			styles.text,      
			todo.complete ? styles.todoTextCompleted : styles.todoText
		]}>
		{todo.title}
		</Text>
		<View style={styles.buttons}>
			<TodoOptionsButton
			name='Done'
			complete={todo.complete}
			onPress={() => toggleComplete(todo.todoIndex)} />
			<TodoOptionsButton
			name='Delete'
			onPress={() => deleteTodo(todo.todoIndex)} />
		</View>
	</View>
);

const styles = StyleSheet.create({  
	todoContainer: {
		marginLeft: 20,    
		marginRight: 20,    
		backgroundColor: '#736002',    
		borderTopWidth: 1,    
		borderRightWidth: 1,    
		borderLeftWidth: 1,    
		borderColor: '#736002',    
		paddingLeft: 14,    
		paddingTop: 7,    
		paddingBottom: 7,    
		shadowOpacity: 0.2,    
		shadowRadius: 3,    
		shadowColor: '#000000',    
		shadowOffset: { 
			width: 2, 
			height: 2 
		},    
		flexDirection: 'row',    
		alignItems: 'center'  
	},  
	todoText: {
		color: '#F2E205',
		fontSize: 20  
	},
	todoTextCompleted: {
		textDecorationLine: 'line-through',
		color: '#F2E205',
		fontSize: 20,
		fontStyle: 'italic'
	},
	buttons: {    
		flex: 1,    
		flexDirection: 'row',    
		justifyContent: 'flex-end',    
		alignItems: 'center'  
	}
});

export default Todo;