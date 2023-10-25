import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const handleSignUpNavigation = () => {
        navigation.navigate('Signup');
    };

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
            style={[styles.container]}
        >
            <View style={styles.container}>
                <Image source={require('../assets/edutech_logo-removebg-preview.png')} style={styles.logo} />
                <Text style={styles.title}>Edutech</Text>
                <Image source={require('../assets/middleImage.png')} style={styles.infographic}/>
                <Text style={styles.text}>Grow your education and level up with Edutech.</Text>
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
    logo: {
        width: 100, // Set the width of the logo
        height: 100, // Set the height of the logo
        marginBottom: 20,
    },
    infographic:{
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white', // Add color to the title
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        color: 'white', // Add color to the text
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
});

export default HomeScreen;
