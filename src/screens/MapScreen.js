import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MapScreen = () => {
    const name = "David";

    return (
        <View>
            <Text style={styles.textStyle}>MapRefresh</Text>
            <Text style={styles.subHeaderStyle}>Hi, may name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: "blue",
        textAlign: 'center'
    },
    subHeaderStyle: {
        fontSize: 20,
        color: "blue",
        textAlign: 'center'
    }
});

export default MapScreen;
