// File path: /linesight/components/Item.jsx
// Used in: checklist.js
// Individual task in a single checklist

import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import Checkbox from 'expo-checkbox';

const styles = StyleSheet.create({
    item:{
      color: '#888',
      backgroundColor: '#ddd',
      paddingHorizontal: 10,
      paddingVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      flex: 1
    },
    box:{
      height: 30,
      width: 30,
    },
    tasks:{
      textAlign: 'center',
      flex: 3
    },
  });

function Item({ task }) {
   
    return (
      <View style={styles.item}>
  
        <Checkbox value={task.completed} style={styles.box} disabled={true} />
  
        <Text style={styles.tasks}>{task.text}</Text>
      </View>
    );
  }
  
  export default Item;