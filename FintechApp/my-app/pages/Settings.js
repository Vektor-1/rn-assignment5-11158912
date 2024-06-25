import React from "react";
import {View, StyleSheet, Text, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import {useTheme} from "../theme/ThemeContext";
import {DarkTheme as theme} from "@react-navigation/native/src";


export default function SettingsScreen() {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.header}>Settings</Text>
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.subOptionContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: theme.colors.text
                        }}>Language</Text>
                        <Ionicons name="chevron-forward-outline" size={24} style={styles.tuneIcon} />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.subOptionContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: theme.colors.text
                        }}>My Profile</Text>
                        <Ionicons name="chevron-forward-outline" size={24} style={styles.tuneIcon} />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.subOptionContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: theme.colors.text
                        }}>Contact Us</Text>
                        <Ionicons name="chevron-forward-outline" size={24} style={styles.tuneIcon} />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.subOptionContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: theme.colors.text
                        }}>Change Password</Text>
                        <Ionicons name="chevron-forward-outline" size={24} style={styles.tuneIcon} />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.subOptionContainer}>
                        <Text style={{
                            fontSize: 18,
                            color: theme.colors.text
                        }}>Privacy Policy</Text>
                        <Ionicons name="chevron-forward-outline" size={24} style={styles.tuneIcon} />
                    </View>
                    <View style={styles.line} />
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '500',
                    color: theme.colors.text
                }}>Theme</Text>
                <ThemeToggleButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        color: theme.colors.text,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        top: 60,
        flex: 1,
        flexDirection: 'column',
        justifyContent:'left',
    },
    optionContainer: {
        padding: 10,
        margin: 10,
    },
    subOptionContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'left',
        padding: 4,
        marginBottom: 8,
    },
    line: {
        width: 365,
        height: 0.35,
        borderWidth: 0.5,
        borderColor: '#AFB0B6FF',
    },
    Arrow1: {
        color: '#000000',
    },
    tuneIcon: {
        color: theme.colors.text
    },
    bottom: {
        flex: 1,
        top: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 30,
    },

});