import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../theme/ThemeContext';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
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
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Cards') {
                            iconName = focused ? 'wallet' : 'wallet-outline';
                        } else if (route.name === 'Statistics') {
                            iconName = focused ? 'chart-pie' : 'chart-pie-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'cog' : 'cog-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.border,
                    tabBarLabelStyle: {
                        color: theme.colors.text,
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
