import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import PartnerModel from 'src/models/PartnerModel';

interface MyProps {
    partner: PartnerModel
}

const PartnerCard = ({partner} : MyProps) => {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.name}>{partner.name}</Text>
                </View>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        padding: 15,
        textAlign: 'center'
    },
    name: {
        color: "#000", 
        textAlign: 'center'
    }
});

export default PartnerCard;