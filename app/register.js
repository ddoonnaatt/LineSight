// File path: /linesight/app/register.js
// This is the Register page, where the user can make an account if they don't have one yet.
// From here the user can enter their data and the app will send it to the database.
// Once submitted, user will be redirected to Login page

import { Text, View, TextInput, StyleSheet, Pressable, Image } from "react-native"
import React, { useState } from "react";
import { Link } from "expo-router"

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
    signup:{
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

function Register(){
    const [email, setEmail] = useState('');
    const [username, setUN] = useState('');
    const [password, setPass] = useState('');

    const handleSignup = () => {
        // brother what do we do
    };

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>

            <Text style={styles.signup}>SIGN UP</Text>

            <View style={styles.body}>
                <View style={styles.field}>
                    <Text style={styles.text}>Username:</Text>
                    <TextInput value={username} onChangeText={username => setUN(username)} style={styles.textin}/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>Email Address:</Text>
                    <TextInput value={email} onChangeText={email => setEmail(email)} style={styles.textin}/>
                </View>
                <View style={styles.field}>
                    <Text style={styles.text}>Password:</Text>
                    <TextInput value={password} onChangeText={password => setPass(password)} style={styles.textin}/>
                </View>
            </View>

            <Link href="/" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.white}>Sign Up</Text>
                </Pressable>
            </Link>

            <View>
                <Text style={styles.acc}>
                    Already have an account? <Link href="/" style={styles.link}>Sign in.</Link>
                </Text>
            </View>
        </View>
    )
}

export default Register;