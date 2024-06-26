import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../theme/ThemeContext';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../pages/Home';
import SettingsScreen from '../pages/Settings';
import Cards from '../pages/Card';
import Statistics from '../pages/Statistics';

const Tab = createBottomTabNavigator();

function BottomNavBar() {
    const { theme } = useTheme();

    return (
        <NavigationContainer theme={theme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconComponent;
                        if (route.name === 'Home') {
                            iconComponent = focused ? <MaterialCommunityIcons name="home" size={24} color={color} /> : <MaterialCommunityIcons name="home-outline" size={24} color={color} />;
                        } else if (route.name === 'Cards') {
                            iconComponent = focused ? <FontAwesome5 name="wallet" size={24} color={color} /> : <FontAwesome5 name="wallet" size={24} color={color} />;
                        } else if (route.name === 'Statistics') {
                            iconComponent = focused ? <Foundation name="graph-pie" size={size} color={color} /> : <Foundation name="graph-pie" size={size} color={color} />;
                        } else if (route.name === 'Settings') {
                            iconComponent = focused ? <Ionicons name="settings" size={size} color={color} /> : <Ionicons name="settings-outline" size={size} color={color} />;
                        }
                        return iconComponent;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: theme.colors.primary,
                    tabBarLabelStyle: {
                        color: theme.colors.text,
                    },
                    tabBarStyle: {
                        height: 70,
                        paddingBottom: 10,
                        backgroundColor: theme.colors.navBar,
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Cards" component={Cards} />
                <Tab.Screen name="Statistics" component={Statistics} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavBar;
