// File path: /linesight/components/SettingRow.jsx
// Used in: profile.js
// One setting

import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 60,
    },
    icon:{
        height: 35,
        width: 35,
    },
    texts:{
        flex: 1,
        paddingLeft: 30,
    },
    main:{
        fontSize: 16,
        paddingTop: 6,
    },
    sub:{
        fontSize: 10,
        color: '#999',
    }
});

// icon addresses have to be declared first and the corresponding item number must be used in Settings.jsx
function SettingRow({ text, mintext, type, imgsrc}){
    var icons = [
        require('../assets/temp.png'),
    ]

    return (
        <Pressable style={styles.container}>
            <Image source={icons[imgsrc]} style={styles.icon} />
            <View style={styles.texts}>
                <Text style={styles.main}>{text}</Text>
                <Text style={styles.sub}>{mintext}</Text>
            </View>
        </Pressable>
    );
}

export default SettingRow;