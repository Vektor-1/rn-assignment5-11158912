import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const VisaCard = require('../Images/Visa.png');

const data = [
    {
        id: '1',
    },
];

const RowCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={VisaCard}
                style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', color: 'black' }}
            >
            </ImageBackground>
        </View>
    );
};

const Visa = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RowCard item={item} />}
            contentContainerStyle={styles.container}
            numRows={2}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        height: 230,
        width: 380,
        backgroundColor: '#5386E4',
        borderRadius: 24,
        marginVertical: 8,
        marginHorizontal: 8,
        overflow: 'hidden',
    },
});

export default Visa;