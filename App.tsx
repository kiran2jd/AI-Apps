import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/ThemeContext';
import './src/i18n/i18n'; // Initialize i18n

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <AppNavigator />
                <StatusBar style="auto" />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
