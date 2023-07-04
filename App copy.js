import React from 'react-native';
import {useState} from 'react' ;
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Tommy');
  const [person, setPerson] = useState({name : 'Ahmad', age : 18});

  const rubahNilai = () => {
    setName('Irfan');
    setPerson({name : 'Hambali', age:33});
  }
  
  return (
    <View style={styles.container}>
       <Text> My Name Is : {name} </Text>
       <Text> His Name Is {person.name} and his age is {person.age} </Text>
       
       <View style = {styles.buttonContainer}>
       <Button title="Update State" onPress={rubahNilai}/>
      </View>
    </View>
  )

}
const styles = StyleSheet.create ({
  container : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
  buttonContainer : {
    margin : 20,
  }
})