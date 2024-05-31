// File path: /linesight/components/Settings.jsx
// Used in: profile.js
// The whole settings page? I don't remember why this isn't in the page file.

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Link } from "expo-router";
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
            <SettingRow text="Change password" mintext="" type="newpage" imgsrc={1}/>
            <SettingRow text="Language" mintext="" type="newpage" imgsrc={2}/>
            <Link replace href="/" aschild>
                <SettingRow text="Log out" mintext="" type="newpage" imgsrc={3}/>
            </Link>
            

            <SettingHeader text="Information" />
            <SettingRow text="About app" mintext="" type="newpage" imgsrc={4}/>
            <SettingRow text="Terms & Conditions" mintext="" type="newpage" imgsrc={5}/>
            <SettingRow text="Privacy Policy" mintext="" type="newpage" imgsrc={6}/>
            <SettingRow text="Share This App" mintext="" type="newpage" imgsrc={7}/>
        </View>
    );
}

export default Settings;