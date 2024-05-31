// File path: /linesight/components/Profile.jsx
// Used in: profile.js
// Display user info including profile picture, name, and email

import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingVertical: 40,
    },
    pfp:{
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        marginVertical: 30,
    },
    add:{
        position: 'relative',
        left: 38,
        bottom: 6,
        zIndex: 2,
        height: 30,
        width: 30,
        borderRadius: 15,
        marginTop: 70,
        backgroundColor: '#007bff',
        alignItems: 'center',
    },
    plus:{
        fontSize: 20,
        color: "white"
    },
    name:{
        paddingTop: 7,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

function Profile(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/dall.jpg')} style={styles.pfp}/>
            <Pressable style={styles.add}>
                <Text style={styles.plus}>+</Text>
            </Pressable>

            <Text style={styles.name}>June Junes</Text>
            <Text>testemail@domain.com</Text>
        </View>
    );
}

export default Profile;