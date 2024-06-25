import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    const isDarkTheme = theme.dark;

    return (
        <View style={styles.container}>
            <Text style={{ color: theme.colors.text, marginRight: 10 }}>
                {isDarkTheme ? '' : ''}
            </Text>
            <Switch
                trackColor={{ false: '#767577', true: '#b3aeae' }}
                thumbColor={isDarkTheme ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isDarkTheme}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default ThemeToggleButton;
