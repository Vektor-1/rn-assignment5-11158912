import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

const Apple = require('../Images/Apple.png');
const Spotify = require('../Images/Spotify.png');
const Transfer = require('../Images/Money.png');
const Cart = require('../Images/Grocery.png');


const data = [
    {
        id: '1',
        image: Apple,
        title: 'Jr Executive',
        subtitle: 'Burger King',
        salary: '$96,000/y',
    },
    {
        id: '2',
        image: Spotify,
        title: 'Product Manager',
        subtitle: 'Beats',
        salary: '$84,000/y',
    },
    {
        id: '3',
        image: Transfer,
        title: 'Product Manager',
        subtitle: 'Facebook',
        salary: '$86,000/y',
    },
    {
        id: '4',
        image: Cart,
        title: 'OpenAI',
        subtitle: 'Marketing Director',
        salary: '$105,900/y',
    },
];

const ColumnCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.topContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.salary}>{item.salary}</Text>
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
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 2,
        height: 86,
        width: '98%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginVertical: 8,
        marginHorizontal: 8,
        padding: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginRight: 16,
        marginTop: 10,
    },
    title: {
        top: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        top: 12,
        color: '#666',
    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingVertical: 0,
        marginRight: 10,
    },
    salary: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});

export default CardList;