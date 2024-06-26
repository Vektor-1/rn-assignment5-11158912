import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const Apple = require('../Images/Apple.png');
const Spotify = require('../Images/Spotify.png');
const Transfer = require('../Images/Money.png');
const Cart = require('../Images/Grocery.png');

const data = [
    {
        id: '1',
        image: Apple,
        title: 'Apple Store',
        subtitle: 'Entertainment',
        cost: '-$5.99',
    },
    {
        id: '2',
        image: Spotify,
        title: 'Spotify',
        subtitle: 'Music',
        cost: '-$12.99',
    },
    {
        id: '3',
        image: Transfer,
        title: 'Transaction',
        subtitle: 'Facebook',
        cost: '$300',
    },
    {
        id: '4',
        image: Cart,
        title: 'Grocery',
        subtitle: 'Food',
        cost: '-$88',
    },
];

const ColumnCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.cost}>{item.cost}</Text>
                </View>
            </View>
        </View>
    );
};

const CardList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ColumnCard item={item} />}
            contentContainerStyle={styles.container}
            numColumns={1}
            horizontal={false}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 24,
        marginVertical: 8,
        marginHorizontal: 10,
        padding: 10,
        height: 90,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    cost: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default CardList;
