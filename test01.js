import { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {name : 'Zidan', key : '1'},
    {name : 'Ahmad', key : '2'},
    {name : 'Faiz', key : '3'},
    {name : 'Khairul', key : '4'},
    {name : 'Azzam', key : '5'},
    {name : 'Haidar', key : '6'},
    {name : 'Desylina', key : '7'},
  ])
    return (
        <View style= {styles.container}>
            <ScrollView>
            {people.map((item) => (
                <Text style={styles.ListFormat}>{item.name}</Text>
            ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        paddingTop : 40,
        paddingHorizontal : 20,
    },

    ListFormat : {
        fontSize : 25,
        marginTop : 25,
        padding : 30,
        backgroundColor : 'pink',
        borderWidth : 1,
        borderColor : 'orange',
    }
})