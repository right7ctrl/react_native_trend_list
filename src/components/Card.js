import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.icon} source={this.props.assetName} />
                <Text style={styles.title}>{this.props.title}</Text>
                <Text numberOfLines={2} style={styles.description}>{this.props.description}</Text>
            </View>
        )
    }
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
        shadowColor: "#000",
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
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    description: {
        marginTop: 4,
        color: 'grey',
        fontSize: 12,
        paddingHorizontal:12,
        textAlign: 'center',
    },
    icon: {
        marginBottom: 16,
        width: 60,
        height: 60
    }
});