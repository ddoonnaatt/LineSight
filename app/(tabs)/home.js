// File path: /linesight/app/(tabs)/home
// This is the Home page which acts as a hub to other pages
// From here the user can:
//      > Go to todo
//      > Go to finance
//      > Go to profile

import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

const styles = StyleSheet.create({
    head:{
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingTop: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    left:{
        width: 50,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    logo:{
        resizeMode: "stretch",
        height: 90,
        width: 200,
    },
    pfp:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginTop: 25,
    },
    body:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    welcome:{
        fontSize: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    summary:{
        flexDirection: "column",
        justifyContent: "space-around",
        paddingVertical: 20,
    },
    dash:{
        paddingVertical: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 20,
    },
    item:{
        color: "#fff",
        fontSize: 25,
        textAlign: "center"
    },
});

function Home(){
    var username = "Placeholder";
    var balance = 12.52;
    var tasks = 12;

    return(
        <View>
            <View style={styles.head}>
                <View style={styles.left}>
                    <Image source={require('../../assets/white.png')} style={styles.logo}/>
                </View>
                <Link href="/(tabs)/profile" aschild>
                    <Pressable style={styles.profile}>
                        <Image source={require('../../assets/dall.jpg')} style={styles.pfp}/>
                    </Pressable>
                </Link>
            </View>

            <View style={styles.body}>
                <Text style={styles.welcome}>Welcome, {username}!</Text>
                <View style={styles.summary}>
                <View style={styles.dash}>
                    <Text style={styles.item}>€{balance}</Text>
                </View>
                <View style={styles.dash}>
                    <Text style={styles.item}>{tasks} Tasks</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default Home;