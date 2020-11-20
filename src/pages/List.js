import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, Button, FlatList, Item, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';



const List = (props) => {
    const { navigation, route } = props;
    return (
        <SafeAreaView style={{ marginTop: Platform.OS == 'ios' ? 0 : 36 }}>
            <Button onPress={() => navigation.goBack()} title="Go Back" />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
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