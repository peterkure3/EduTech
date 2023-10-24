import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const SignupPage = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signing up with:', firstName, lastName, email, confirmEmail, password, confirmPassword);
        navigation.navigate('Profile');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Edutech</Text>
            <Text>Login</Text>
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                placeholder="Confirm Email"
                value={confirmEmail}
                onChangeText={(text) => setConfirmEmail(text)}
            />
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={{
                    width: '80%',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 20,
                    paddingLeft: 10,
                }}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />

            <Text>Already have account? Login here</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: 'orange',
                    padding: 16,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 24,
                }}
                onPress={handleSignup}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignupPage;
