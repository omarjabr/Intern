import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';

const Footer = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.removeButton}>
                    Remove completed items
                </Text>
            </View>
        );
    
}
export default Footer;

const styles = StyleSheet.create({
    container:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        height:30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    removeButton:{
        position: 'absolute',
        bottom:0,
        color:'red'
    }
});