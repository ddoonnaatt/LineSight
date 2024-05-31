// File path: /linesight/app/(tabs)/checklists.js
// This is the list of checklists page where the user can see all the checklists.
// From here, a user can:
//      > edit a single checklist
//          > This will lead them to list page
//      > add a checklist
//          > This will also lead them to list page
//      > delete checklist (WIP)

import { StyleSheet, ScrollView, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import List from "../../components/List";

function Checklists() {
  const [singlelist,setsinglelist] = useState([
    {
      id: 1,
      name: 'Checklist 1'
    },
    {
      id: 2,
      name: 'Checklist 2'
    },
    {
      id: 3,
      name: 'Checklist 3'
    }
  ]);
  return (
    <>
      <ScrollView>
        {singlelist.map(singlelist => (
            <Pressable>
                <List
                    num={singlelist.id}
                    title={singlelist.name}
                />
            </Pressable>
        ))}
      </ScrollView>

      <Pressable style={styles.button}>
        <Text style={styles.text}>
            +
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: "#aaa",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignContent: "center",
    paddingVertical: 2,
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  text:{
    textAlign: "center",
    fontSize: 30,
  }
});

export default Checklists;