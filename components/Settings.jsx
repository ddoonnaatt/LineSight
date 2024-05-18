// File path: /linesight/components/Settings.jsx
// Used in: profile.js
// The whole settings page? I don't remember why this isn't in the page file.

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import SettingHeader from "./SettingHeader";
import SettingRow from "./SettingRow";

const styles = StyleSheet.create({

});

function Settings(){
    // imgsrc numbers correspond to addresses in SettingsRow.jsx
    return (
        <View>
            <SettingHeader text="General Settings" />
            <SettingRow text="Mode" mintext="Dark & Light" type="slide" imgsrc={0} />
            <SettingRow text="Change password" mintext="" type="newpage" imgsrc={0}/>
            <SettingRow text="Language" mintext="" type="newpage" imgsrc={0}/>

            <SettingHeader text="Information" />
            <SettingRow text="About app" mintext="" type="newpage" imgsrc={0}/>
            <SettingRow text="Terms & Conditions" mintext="" type="newpage" imgsrc={0}/>
            <SettingRow text="Privacy Policy" mintext="" type="newpage" imgsrc={0}/>
            <SettingRow text="Share This App" mintext="" type="newpage" imgsrc={0}/>
        </View>
    );
}

export default Settings;