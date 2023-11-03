import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard({ navigation }) {
  const suggestedTeachers = [
    {name: 'John Doe', likes: 320},
    {name: 'Jane Smith', likes: 210},
    {name: 'Emily Johnson', likes: 540},
    
  ];

  return (
    <Background>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="gray" />
          <TextInput 
            style={styles.searchBar}
            placeholder="Search for courses..."
          />
        </View>
        
        <Header>Homepage</Header>
        
        <View style={styles.banner}>
          <Text>Dummy Banner Content</Text>
        </View>

        <View style={styles.courseGrid}>
          {Array(6).fill(null).map((_, idx) => (
            <View key={idx} style={styles.courseBox}>
              <Text style={styles.courseBoxTitle}>Course {idx + 1}</Text>
              <Text style={styles.courseBoxDescription}>Course Description</Text>
            </View>
          ))}
        </View>

        <Header>Suggested Teachers</Header>
        <View style={styles.suggestionsList}>
          {suggestedTeachers.map((teacher, idx) => (
            <View key={idx} style={styles.suggestionBox}>
              <Text style={styles.suggestionItem}>{teacher.name}</Text>
              <Icon name="thumb-up" size={20} color="gray" />
              <Text style={styles.likesCount}>{teacher.likes}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingLeft: 15,
    margin: 15,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  banner: {
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 20,
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
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  courseBox: {
    width: '48%',
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  courseBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseBoxDescription: {
    marginTop: 5,
  },
  suggestionsList: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  suggestionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  suggestionItem: {
    flex: 1,
    fontSize: 16,
  },
  likesCount: {
    marginLeft: 5,
  },
});
