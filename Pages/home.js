import React from "react";
import { View, Text, Button } from "react-native";
import {Global, styles} from '../styles/global';

export default function Home({navigation}) {
    const bukaDetail = () => {
        navigation.navigate("Details");
    }
    const bukaAbout = () => {
        navigation.navigate("About");
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.judulText}> Halaman Home</Text>
            <Button title='Detail' onPress= {bukaDetail}/>
            <Button title='About' onPress= {bukaAbout}/>
        </View>
    )
}