// File path: /linesight/app/index.js
// This is the Login page, and the first page that a user will see.
// From here, a user can:
//      > sign in with their username and password which will be matched with the database
//          > This will lead them to the Home page
//      > register if they do not have an account yet
//          > This will lead them to the Register page

import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput } from "react-native";
import { Link } from "expo-router";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingTop: 120,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    logo:{
        resizeMode: 'contain',
        height: 120,
    },
    login:{
        fontSize: 20,
        paddingBottom: 20,
    },
    body:{
        flexDirection: 'column',
        width: 250,
        paddingBottom: 15,
    },
    field:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
    },
    text:{
        fontSize: 15,
        paddingLeft: 5,
    },
    textin:{
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 2,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    button:{
        paddingHorizontal: 2,
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        width: 100,
        backgroundColor: '#007bff',
        marginBottom: 15,
    },
    white:{
        color: '#fff',
        fontSize: 15,
    },
    acc:{
        color: '#aaa',
        fontSize: 12,
    },
    link:{
        color: '#007bff',
        textDecorationLine: 'underline'
    },
});

function Login(){
    const [username, setUN] = useState('');
    const [password, setPass] = useState('');

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.login}>LOGIN</Text>

            <View style={styles.body}>
                <View style={styles.field}>
                    <Text style={styles.text}>Username:</Text>
                    <TextInput value={username} onChangeText={username => setUN(username)} style={styles.textin}/>
                </View> 
                <View style={styles.field}>
                    <Text style={styles.text}>Password:</Text>
                    <TextInput value={password} onChangeText={password => setPass(password)} style={styles.textin}/>
                </View>              
            </View>

            <Link href="/(tabs)/home" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.white}>Login</Text>
                </Pressable>
            </Link>

            <View>
                <Text style={styles.acc}>
                    Don't have an account? <Link href="/register" style={styles.link}>Sign up.</Link>
                </Text>
            </View>
        </View>
    )
}

export default Login;