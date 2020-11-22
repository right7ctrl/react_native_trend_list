import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, Button, FlatList, Item, Dimensions, ActivityIndicator } from 'react-native';
import ListItem from '../components/ListItem';



const List = (props) => {
    const { navigation, route } = props;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        setLoading(true);
        await fetch("http://api.yazilimgo.com/trending/index.php?src=eksi")
            .then((res) => res.json())
            .then((res) => setData(res.trends));
        setLoading(false);
    }


    return (
        <SafeAreaView style={{ marginTop: Platform.OS == 'ios' ? 0 : 36 }}>
            <Button onPress={() => navigation.goBack()} title="Go Back" />
            {
                isLoading ? <ActivityIndicator /> :
                    <FlatList data={data} renderItem={(item) => <ListItem key={data.indexOf(item)} item={item} />} />
            }
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