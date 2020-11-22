import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
const { width, height } = Dimensions.get;
const ListItem = (props) => {
    const { item } = props.item;
    const isGoogle = props.id === 'google';
    const image = isGoogle ? { uri: item.image.imageUrl } : require('../../assets/eksi.png');
    const title = isGoogle ? item.title.query : item.title;
    const extra = isGoogle ? item.formattedTraffic : item.extra;

    return (
        <View style={styles.item}>
            <Image style={styles.img} source={image} />
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text>{title}</Text>
                <Text style={styles.extra}>{extra}</Text>
            </View>
            <Icon style={styles.icon} name="menu" />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 12,
        flexDirection: 'row',
        padding: 8,
        width: width,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.45,
        shadowRadius: 4.65,
        elevation: 12,
        alignItems: 'center'
    },
    extra: {
        fontSize: 12,
        color: 'grey'
    },
    img: {
        height: 42, width: 42, backgroundColor: '#fefefe', borderRadius: 4, marginRight: 12
    },
    icon: {
        fontSize: 18,
        marginLeft: 12
    }
});

export default ListItem;
