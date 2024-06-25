import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {useTheme} from "../theme/ThemeContext";

export default function HomeScreen() {
    const { theme } = useTheme();
    return (

        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={styles.welcome}>Home!</Text>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    }
});