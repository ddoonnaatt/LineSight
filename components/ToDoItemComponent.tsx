import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Item } from './Item';
export const ToDoItemComponent: React.FC<{
  todo: Item;
  deleteItem: Function;
}> = ({ todo: {id, value}, deleteItem }) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoTextContainer}>
        <Text
          style={styles.sectionTitle}>
          {value}
        </Text>
      </View>
      <Pressable onPress={() => deleteItem(id)} style={styles.button}>
        <Text style={styles.done}>Done!</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#007bff',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignContent: 'center',
    flexDirection: 'column',
  },
  todoTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 10,
    color: "white"
  },
  button:{
    justifyContent: 'center',
    backgroundColor: "white",
    paddingVertical: 5,
    marginHorizontal: 100,
    borderRadius: 6,
  },
  done:{
    textAlign: 'center'
  }
});