// File path: /linesight/app/(tabs)/list.js
// This is the page where the user can see their user details.
// From here the user can:
//      > see their profile picture (cannot be changed as of now), name, and email
//      > see various settings that do not work yet and are not part of our objectives
//      > go back to the home page

import { StyleSheet, ScrollView, View } from 'react-native';
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Profile />
      <Settings />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
