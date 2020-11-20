import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Platform, Button, FlatList, Item, Dimensions } from 'react-native';
const { width, height } = Dimensions.get;
const ListItem = (props) => {
    return (
        <View style={styles.item}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 4, marginRight: 12 }} />
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text>Title</Text>
                <Text>description</Text>
            </View>
            <Text>icon_here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 8,
        width: width,
        backgroundColor: 'red',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.45,
        shadowRadius: 4.65,
        elevation: 6,
    }
});

export default ListItem;