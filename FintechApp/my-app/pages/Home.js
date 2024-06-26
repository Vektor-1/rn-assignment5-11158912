import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import {Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Img1 from '../assets/Images/profile.png';
import Visa from '../assets/Images/Visa.png';

export default function HomeScreen() {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={Img1} style={styles.profileIcon} />
                        <View style={styles.profileText}>
                            <Text style={[styles.welcomeText, { color: theme.colors.text }]}>Welcome back,</Text>
                            <Text style={[styles.profileName, { color: theme.colors.text }]}>Eric Atsu</Text>
                        </View>
                    </View>
                    <View style={[styles.searchIconContainer, { backgroundColor: theme.colors.iconBackground }]}>
                        <Ionicons name='search-outline' size={24} style={[ { color: theme.colors.text }]} />
                    </View>
                </View>

                <View style={styles.VisaCard}>
                    <Image source={Visa} style={styles.VisaCardImage} />
                </View>

                <View style={styles.iconsSection}>
                    <View style={styles.iconContainer}>
                        <View style={[styles.iconCircle, { backgroundColor: theme.colors.iconBackground }]}>
                            <MaterialIcons name='arrow-upward' size={30} color={theme.colors.text} />
                        </View>
                        <Text style={{ color: theme.colors.text }}>Send</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={[styles.iconCircle, { backgroundColor: theme.colors.iconBackground }]}>
                            <MaterialIcons name='arrow-downward' size={30} color={theme.colors.text} />
                        </View>
                        <Text style={{ color: theme.colors.text }}>Receive</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={[styles.iconCircle, { backgroundColor: theme.colors.iconBackground }]}>
                            <Foundation name='dollar' size={30} color={theme.colors.text} />
                        </View>
                        <Text style={{ color: theme.colors.text }}>Loan</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={[styles.iconCircle, { backgroundColor: theme.colors.iconBackground }]}>
                            <Ionicons name='cloud-upload-outline' size={30} color={theme.colors.text} />
                        </View>
                        <Text style={{ color: theme.colors.text }}>Topup</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={styles.transactionSection}>
                    <View style={styles.transactionHeader}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Transaction</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllButton}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.transactionItem, {backgroundColor: theme.colors.backgroundColor}]}>
                        <View style={styles.transactionDetails}>
                            <View style={[styles.iconCircle1, { backgroundColor: theme.colors.iconBackground }]}>
                                <Image source={require("../assets/Images/Apple.png")} style={styles.transactionIcon} />
                            </View>
                            <View style={styles.transactionTextContainer}>
                                <Text style={[styles.transactionText, { color: theme.colors.text }]}>Apple Store</Text>
                                <Text style={styles.transactionSubText}>Entertainment</Text>
                            </View>
                        </View>
                        <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$5.99</Text>
                    </View>
                    <View style={[styles.transactionItem, {backgroundColor: theme.colors.backgroundColor}]}>
                        <View style={styles.transactionDetails}>
                            <View style={[styles.iconCircle1, { backgroundColor: theme.colors.iconBackground }]}>
                                <Image source={require("../assets/Images/Spotify.png")} style={styles.transactionIcon} />
                            </View>
                            <View style={styles.transactionTextContainer}>
                                <Text style={[styles.transactionText, { color: theme.colors.text }]}>Spotify</Text>
                                <Text style={styles.transactionSubText}>Music</Text>
                            </View>
                        </View>
                        <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$12.99</Text>
                    </View>
                    <View style={[styles.transactionItem, {backgroundColor: theme.colors.backgroundColor}]}>
                        <View style={styles.transactionDetails}>
                            <View style={[styles.iconCircle1, { backgroundColor: theme.colors.iconBackground }]}>
                                <Image source={require("../assets/Images/Money.png")} style={styles.transactionIcon} />
                            </View>
                            <View style={styles.transactionTextContainer}>
                                <Text style={[styles.transactionText, { color: theme.colors.text }]}>Money Transfer</Text>
                                <Text style={styles.transactionSubText}>Transaction</Text>
                            </View>
                        </View>
                        <Text style={{
                            color:'blue',
                            fontSize: 16,
                            fontWeight: 'bold',}}>$300</Text>
                    </View>
                    <View style={[styles.transactionItem, {backgroundColor: theme.colors.backgroundColor}]}>
                        <View style={styles.transactionDetails}>
                            <View style={[styles.iconCircle1, { backgroundColor: theme.colors.iconBackground }]}>
                                <Image source={require("../assets/Images/Grocery.png")} style={[styles.transactionIcon, ]} />
                            </View>
                            <View style={styles.transactionTextContainer}>
                                <Text style={[styles.transactionText, { color: theme.colors.text }]}>Grocery</Text>
                                <Text style={styles.transactionSubText}>Food</Text>
                            </View>
                        </View>
                        <Text style={[styles.transactionAmount, { color: theme.colors.text }]}>-$88</Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        paddingBottom: 20,
        top: 30,
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 55,
        height: 55,
        alignItems: 'flex-end',
    },
    profileText: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    welcomeText: {
        fontSize: 14,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c5bfbf',
        borderRadius: 62,
        height: 50,
        width: 50,
    },
    searchIcon: {
        width: 50,
        height: 50,
    },
    VisaCardImage: {
        top: 30,
        width: '100%',
        height: 220,
    },
    iconsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconCircle: {
        width: 65,
        height: 65,
        borderRadius: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    iconCircle1: {
        width: 55,
        height: 55,
        borderRadius: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    transactionSection: {
        marginBottom: 20,
        marginTop: 10,
    },
    transactionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 500,
    },
    seeAllButton: {
        color: 'blue',
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 2,
    },
    transactionDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    transactionTextContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginBottom: 10,
    },
    transactionText: {
        fontSize: 24,
        fontWeight: 500,
    },
    transactionSubText: {
        fontSize: 16,
        color: 'gray',
    },
    VisaCard: {
        flex: 1,
        width: '100%',
        height: 280,
    },
});
