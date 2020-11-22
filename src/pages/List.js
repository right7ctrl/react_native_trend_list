import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import ListItem from '../components/ListItem';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const List = (props) => {
    const { navigation, route } = props;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        console.log(route.params.title);
        setLoading(true);
        await fetch("http://api.yazilimgo.com/trending/index.php?src=" + route.params.id)
            .then((res) => res.json())
            .then((res) => setData(res.trends));
        setLoading(false);
    }


    return (
        <View>
            <Header>
                <Left>
                    <Button onPress={() => { navigation.goBack() }} transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ textAlign: 'center' }}>{route.params.title}</Title>
                </Body>
                <Right />
            </Header>

            {
                isLoading ?
                    <ActivityIndicator style={styles.indicator} /> :
                    <FlatList
                        style={styles.flatList}
                        data={data}
                        renderItem={(item) => <ListItem
                            key={data.indexOf(item)}
                            asset={route.params.asset}
                            item={item} id={route.params.id} />}
                        keyExtractor={(item) => item.id}
                    />
            }
        </View>
    );


}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: 16
    },
    flatList: {
        padding: 12
    },
    indicator: {

    }
});
export default List;