import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import Card from '../components/Card'

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 36 }}>
                <Text style={styles.title}>Trendler</Text>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <Card title="Google" description="Popüler aramaları görüntüle" assetName={require('../../assets/google.png')} />
                        <Card title="Ekşi Sözlük" description="Gündemdeki başlıkları görüntüle" assetName={require('../../assets/eksi.png')} />
                    </View>
                    <View style={styles.row}>
                        <Card title="Twitter" description="Gündemdeki hashtagleri görüntüle" assetName={require('../../assets/twitter.png')} />
                        <Card title="Youtube" description="Trend videoları görüntüle" assetName={require('../../assets/youtube.png')} />
                    </View>
                    <View style={styles.row}>
                        <Card title="Reddit" description="Popüler başlıkları görüntüle" assetName={require('../../assets/reddit.png')} />
                        <Card title="Son Dakika" description="Son dakika haberlerini görüntüle" assetName={require('../../assets/news.png')} />
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: 16
    },
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