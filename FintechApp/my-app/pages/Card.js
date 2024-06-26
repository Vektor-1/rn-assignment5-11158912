import React from "react";
import {View, StyleSheet, Image} from "react-native";
import Visa from "../assets/Images/Visa.png";

export default function Card() {
    return (
        <View>
            <View style={styles.VisaCard}>
                <Image source={Visa} style={styles.VisaCardImage} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    VisaCard: {
        flex: 1,
        width: '100%',
        height: 280,
        top: 40,
        marginHorizontal: 15,
        paddingHorizontal: 15,
    },
});

