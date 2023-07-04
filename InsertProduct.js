import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default class InsertProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {pid : '', pnm : '', prc : '', qty :''};
    }

    InsertData = () => {
        var productid = this.state.pid;
        var productnm = this.state.pnm;
        var price     = this.state.prc;
        var quantity  = this.state.qty;

        if(productid.length==0 || productnm.length == 0  || price.length == 0 || quantity.length == 0) {
            alert("Tolong lengkapi isian form nya Bro");
        }
        else
        {
            // alert("Disini execute untuk API nya");
            var API_Url = "http://192.168.1.12/db/Products.php";
            var Data = {
                 pid : productid,
                 pnm : productnm,
                 prc : price,
                 qty : quantity 
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
                alert(response[0].Message);
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
                <TextInput 
                   placeholder="Product Name"
                   style = {styles.txtStyle}
                   placeholderTextColor={'grey'} 
                   value = {this.state.pnm}
                   onChangeText = {(pnm) => this.setState({pnm})}
                />
                <TextInput 
                    placeholder="Price" 
                    style = {styles.txtStyle}
                    placeholderTextColor={'grey'}
                    value = {this.state.prc}
                    keyboardType={'numeric'} 
                    onChangeText = {(prc) => this.setState({prc})}
                />
                <TextInput 
                    placeholder="Quantiy" 
                    style = {styles.txtStyle}
                    placeholderTextColor={'grey'}
                    value = {this.state.qty}
                    keyboardType={'numeric'}
                    onChangeText = {(qty) => this.setState({qty})}
                />
                <Button 
                  title={'Save Record'} 
                  onPress = {this.InsertData}
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
    }
})