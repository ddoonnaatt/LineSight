// File path: /linesight/components/List.jsx
// Used in: checklist.js
// One checklist within the list of checklists

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import { Link } from "expo-router";
import Item from "./Item";

const styles = StyleSheet.create({
    link:{
        flex: 1,
        justifyContent: "space-evenly"
    },
    singlelist:{
        justifyContent: 'space-evenly',
        backgroundColor: '#aaa',
        paddingTop: 10,
        marginVertical: 10,
    }, 
    title:{
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    edit:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ddd',
        flexDirection: 'row-reverse',
    },
    text:{
        textDecorationLine: 'underline',
    }
});

function List({ num, title }){
    const [tasks, setTasks] = useState([
        {
          id: 1,
          text: 'Doctor Appointment',
          completed: true,
          key: 1
        },
        {
          id: 1,
          text: 'Meeting at School',
          completed: false,
          key: 2
        },
        {
            id: 2,
            text: 'Buy groceries',
            completed: false,
            key: 3
        },
        {
            id: 2,
            text: 'Clean room',
            completed: true,
            key: 4
        },
        {
            id: 2,
            text: 'Study for exams',
            completed: false,
            key: 5
        },
        {
            id: 3,
            text: 'Submit project',
            completed: false,
            key: 6
        }
      ]);
      

    return(
        <>
        <Link href={{
            pathname: "/(tabs)/list",
            params: {  }
        }} asChild>
            <Pressable>
                <View style={styles.singlelist}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    {tasks.map(task => {
                        if(num === task.id){
                            return(
                                <Item
                                    id={task.id} 
                                    task={task}
                                />
                            );
                        }
                    })}

                    <Pressable style={styles.edit}>
                        <Text style={styles.text}>
                            Edit checklist &gt;
                        </Text>
                    </Pressable>
                </View>
            </Pressable>
            </Link>
        </>
    );
}

export default List;