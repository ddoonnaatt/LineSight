// File path: /linesight/components/SettingHeader.jsx
// Used in: profile.js
// Mini header for each category of settings

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'left',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ddd' 
    },
    text:{
        color: '#666'
    }
});

function SettingHeader({ text }){
    return (
        <View style={styles.container}>
             <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}

export default SettingHeader;