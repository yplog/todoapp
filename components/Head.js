import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Head = () => (  
  <View style={styles.header}>    
    <Text style={styles.headerText}>      
      ToDo List
    </Text>
  </View>
);
    
const styles = StyleSheet.create({  
  header: {    
    marginTop: 10  
  },
  headerText: {    
    textAlign: 'center',    
    fontSize: 50,    
    color: '#403501',    
    fontWeight: '100'  
  }
});

export default Head;