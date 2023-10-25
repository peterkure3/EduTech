import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignupPage = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLoginNavigation=()=>{
        navigation.navigate('Login');
    }
    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signing up with:', firstName, lastName, email, confirmEmail, password, confirmPassword);
        navigation.navigate('Profile');
    };

    return (
        <LinearGradient
            colors={['blue', 'purple']}
            start={{
                x: 0,
                y: 0
            }}
            end={{
                x: 1,
                y: 1
            }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/edutech_logo-removebg-preview.png')} style={styles.logo} />
                <Text style={{ color: 'white', fontSize: 24, paddingBottom: 10 }}>Edutech</Text>
                <Text style={{ color: 'white', fontSize: 18, paddingBottom: 10 }}>Sign Up</Text>
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChangeText={(text) => setConfirmEmail(text)}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        paddingLeft: 10,
                        color: 'gray', // Make the text color gray
                        borderRadius: 24,
                        backgroundColor: 'white'
                    }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                <TouchableOpacity onPress={handleLoginNavigation}>
                    <Text style={{ color: 'white', paddingBottom: 10 }}>Already have an account? Login here</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '100%',
                        backgroundColor: 'orange',
                        padding: 16,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 24,
                        alignItems: 'center'
                    }}
                    onPress={handleSignup}
                >
                    <Text style={{ color: 'white', fontSize: 18, }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>

    );
};

const styles = {
    logo: {
        width: 100, // Set the width of the logo
        height: 100, // Set the height of the logo
        marginBottom: 20,
    },
};

export default SignupPage;
