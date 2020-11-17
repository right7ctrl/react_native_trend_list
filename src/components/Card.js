import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>asdad</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});