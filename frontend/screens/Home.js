import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const handleLogout = () => {
        // Add your logout logic here
        // You may want to clear the user's session and navigate back to the login screen
        navigation.navigate('Login');
    };
    const colorScheme = useColorScheme();

    const handleSignUpNavigation = () => {
        navigation.navigate('Signup'); // Navigate to the "Signup" screen
    };

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    return (
        <LinearGradient
            colors={['purple', 'blue']}
            start={{
                x: 0,
                y: 0
            }}
            end={{
                x: 1,
                y: 1
            }}
            style={[styles.container, themeContainerStyle]}
        >
            <View style={styles.container}>

                <Text style={[styles.title, themeTextStyle]}>Edutech</Text>
                <Text style={[styles.text, themeTextStyle]}>Grow your education and level up with Edutech.</Text>


                <CustomButton title="Get Started" onPress={handleSignUpNavigation} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 24,
    },
    buttonText: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

export default HomeScreen;
