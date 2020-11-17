import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Card from './components/Card'

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <Card />
                        <Card />
                    </View>
                    <View style={styles.row}>
                        <Card />
                        <Card />
                    </View>
                    <View style={styles.row}>
                        <Card />
                        <Card />
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 4
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    }
});