import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import Card from '../components/Card'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 0 : 36 }}>
            <Text style={styles.title}>Trendler</Text>
            <Text style={styles.slogan}>Gündemi takip edin!</Text>
            <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: 16
    },
    slogan: {
        paddingLeft: 16,
        fontSize: 14,
        color: '#999'
    },
    container: {
        flex: 1,
        padding: 4
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    }
});
export default Home;