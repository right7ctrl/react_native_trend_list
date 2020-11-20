import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Card = (props) => {

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => {
                console.log(props.navigation);
            }} style={styles.touchableOpacity}>
                <Image style={styles.icon} source={props.assetName} />
                <Text style={styles.title}>{props.title}</Text>
                <Text numberOfLines={2} style={styles.description}>{props.description}</Text>
            </TouchableOpacity>
        </View>


    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assetName: PropTypes.number
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: "#999",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    description: {
        marginTop: 4,
        color: 'grey',
        fontSize: 12,
        textAlign: 'center',
    },
    icon: {
        marginBottom: 16,
        width: 54,
        height: 54
    }
});

export default Card;