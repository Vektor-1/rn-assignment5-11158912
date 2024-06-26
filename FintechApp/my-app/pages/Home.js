import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import Img1 from '../assets/Images/profile.png';
import VisaCard from '../assets/card/VisaCard';
import Cards from '../assets/card/cards';

export default function HomeScreen() {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.headerContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
                            {Img1 && <Image source={Img1} style={styles.profileImage} />}
                        </TouchableOpacity>
                        <View style={styles.heading}>
                            <Text style={[styles.welcome, { color: theme.colors.text }]}>Welcome Back</Text>
                            <Text style={[styles.name, { color: theme.colors.text }]}>Eric Atsu</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchIconContainer} onPress={() => {}}>
                    <Ionicons name="search-outline" size={24} style={[styles.searchIcon, { color: theme.colors.text }]} />
                </TouchableOpacity>
            </View>
            <View>
                <VisaCard />
            </View>
            <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Transaction</Text>
                <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
            </View>
            <View>
                <Cards />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        top: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    leftContainer: {
        flexDirection: 'column',
        width: 300,
        padding: 16,
        marginLeft: 14,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageButton: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 1,
        marginRight: 16,
    },
    heading: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    welcome: {
        fontSize: 14,
        paddingBottom: 5,
    },
    name: {
        fontSize: 20,
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 20,
    },
    searchIconContainer: {
        position: 'absolute',
        top: 15,
        right: 20,
        height: 45,
        width: 45,
        borderRadius: 24,
        backgroundColor: '#dad6d6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        height: 20,
        width: 20,
        color: '#000000',
        marginRight: 2,
        marginBottom: 2,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
    },
    seeAllText: {
        fontSize: 14,
        color: '#422be6',
    },
});
