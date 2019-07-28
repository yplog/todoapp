import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';


const TabBarItem = ({ border, title, selected, setType, type }) => (  
	<TouchableHighlight
	underlayColor='#403501'
	onPress={setType}    
	style={[
		styles.item, 
		selected ? styles.selected : null,
		border ? styles.border : null,
		type === title ? styles.selected : null 
	]}>
		<Text style={[ 
			styles.itemText, 
			type === title ? styles.bold : null 
		]}>      
			{title}    
		</Text>  
	</TouchableHighlight>
);
		
	const styles = StyleSheet.create({  
		item: {    
			flex: 1,    
			justifyContent: 'center',    
			alignItems: 'center'
		},  
		border: {    
			borderLeftWidth: 1,    
			borderLeftColor: '#403501'  
		},  
		itemText: {    
			color: '#F2CB05',    
			fontSize: 16,
			fontWeight: '900'
		},  
		selected: {    
			backgroundColor: '#F2B705',
		},  
		bold: {    
			fontWeight: 'bold',
			color: '#403501'  
	}
});
			
export default TabBarItem;