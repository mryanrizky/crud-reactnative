import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default class SelectProduct extends Component {
    constructor(props) {
        super(props);
        this.state ={pid : '', pnm : '', prc : '', qty : ''};
    }

    SearchRecord = () => {
        var productid = this.state.pid;

        if(productid.length ==0 ) {
            alert("Jangan Kosong Bro");
        }
        else
        {
          // ini script untuk call API
          var API_Url = "http://192.168.1.12/db/DataExecute.php";
          var Data = {
               pilih : '5',
               pid : productid, 

          };

          fetch(API_Url, {
              method  : 'POST',
              headers : { 'Accept'      : 'application/json',
                          'Content-Type': 'application/json',  
                        },
              body    : JSON.stringify(Data),
          })
          .then((response) => response.json())
          .then((response) => {
              this.setState({pid : response[0].pid});
              this.setState({pnm : response[0].pname});
              this.setState({prc : response[0].price});
              this.setState({qty : response[0].qty});

          })
          .catch((error) => { 
              alert('Error' + error);
          })

        }
    }
    render() {
         return(
            <View style= {styles.viewStyle}>
                <TextInput 
                   placeholder="ProductID" 
                   style = {styles.txtStyle}
                   placeholderTextColor={'grey'} 
                   value = {this.state.pid}
                   onChangeText = {(pid) => this.setState({pid})}
                 />
                <Button 
                  title={'Find Record'} 
                  onPress = {this.SearchRecord}
                />    
                <TextInput 
                   style = {styles.txtStyle2}
                   value = {this.state.pnm}
                 />
                <TextInput 
                   style = {styles.txtStyle}
                   value = {this.state.prc}
                />

                <TextInput 
                   style = {styles.txtStyle}
                   value = {this.state.qty}
                />
            </View>
         )
    }
}

const styles = StyleSheet.create({
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
     }
})