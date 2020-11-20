import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, Button, FlatList, Item } from 'react-native';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const List = (props) => {
    const { navigation, route } = props;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 0 : 36 }}>
            <Button onPress={() => navigation.goBack()} title="Go Back" />
            <Text>List Page</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: 16
    }
});
export default List;