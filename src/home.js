import React, { Component } from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>asdad</Text>
                        </View>
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
    },
    item: {
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