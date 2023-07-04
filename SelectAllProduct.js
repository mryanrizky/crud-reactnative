import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TextInput, FlatList} from 'react-native';

export default class SelectAllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        this.SearchRecord();
    }

    SearchRecord = () => {
          // ini script untuk call API
          var API_Url = "http://192.168.1.12/db/selectAllProduct.php";
          fetch(API_Url)
          .then((response) => response.json())
          .then((x) => {
              this.setState({data : x});
          })
          .catch((error) => { 
              alert('Error' + error);
          })
    }
    render() {
         return(
            <View style= {styles.viewStyle}>
                <FlatList
                    data={this.state.data}
                    renderItem=
                    {
                        ({item}) =>
                        <View style={styles.viewData}> 
                            <Text style={styles.txtData}>ProductID : {item.pid}</Text>
                            <Text>Product Name : {item.pname}</Text>
                            <Text>Price : {item.price}</Text>
                            <Text>Qty : {item.qty}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id} 
                />
            </View>
         )
    }
}

const styles = StyleSheet.create({
    viewData : {
        marginTop : 20,
        padding :5,
        borderBottomWidth : 1,
        borderBottomColor : 'skyblue',
    },

    viewStyle : {
        flex : 1,
        padding : 20,
        marginTop : 10
    },

    txtStyle : {
       borderBottomWidth : 1,
       borderBottomColor : 'skyblue',
       marginBottom : 20,
    },

    txtStyle2 : {
        marginTop : 30,
        borderBottomWidth : 1,
        borderBottomColor : 'skyblue',
        marginBottom : 20,
     },

     txtData : {
        fontWeight : 'bold',
        color : 'blue',
     }
})