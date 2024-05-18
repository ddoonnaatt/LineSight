// File path: /linesight/components/HomeHeader.jsx
// to be replaced; i just couldnt see some stuff

import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main:{
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: "#aaa"
    },
    text:{
        fontSize: 30,
    }
});

function HomeHeader(){
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                Test Home Header
            </Text>
        </View>
    );
}

export default HomeHeader;