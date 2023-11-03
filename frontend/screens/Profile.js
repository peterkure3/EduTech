import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile({ navigation }) {
  const user = {
    name: 'John Doe',
    language: 'English',
    enrolledCourses: [
      {title: 'Math 101', progress: 75},
      {title: 'History Basics', progress: 50},
    ],
    wishlist: ['Science Advanced', 'Programming Basics']
  };

  return (
    <Background>
      <View style={styles.profileContainer}>
        
        <View style={styles.profileImage}>
          <Icon name="person" size={70} color="gray" />
        </View>
        
        <Text style={styles.userName}>{user.name}</Text>
        
        <View style={styles.languageContainer}>
          <Text style={styles.headerText}>Chosen Language:</Text>
          <Text>{user.language}</Text>
        </View>
        
        <View style={styles.coursesContainer}>
          <Text style={styles.headerText}>Enrolled Courses:</Text>
          <FlatList 
            data={user.enrolledCourses}
            renderItem={({item}) => (
              <View style={styles.courseItem}>
                <Text>{item.title}</Text>
                <Text>{item.progress}% Completed</Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
          />
        </View>

        <View style={styles.wishlistContainer}>
          <Text style={styles.headerText}>Wishlist:</Text>
          <FlatList 
            data={user.wishlist}
            renderItem={({item}) => (
              <Text style={styles.wishlistItem}>{item}</Text>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" size={25} color="gray" />
          <Text>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={25} color="gray" />
          <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Courses')}>
          <Icon name="library-books" size={25} color="gray" />
          <Text>Courses</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  coursesContainer: {
    marginBottom: 20,
    width: '100%',
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  wishlistContainer: {
    marginBottom: 20,
    width: '100%',
  },
  wishlistItem: {
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
  },
});
