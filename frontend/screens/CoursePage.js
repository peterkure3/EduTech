import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../components/Background'; // Assuming you have this component

// Mock data for courses
const coursesData = [
  { id: '1', title: 'Math 101', description: 'An introduction to algebra, geometry, and calculus.' },
  { id: '2', title: 'History Basics', description: 'Overview of world history from the Renaissance to modern times.' },
  { id: '3', title: 'Science Advanced', description: 'In-depth studies in biology, chemistry, and physics.' },
  { id: '4', title: 'Programming Basics', description: 'Learn the fundamentals of programming using Python.' },
  // ...add more courses as needed
];

// A stateless component to render each course
const CourseItem = ({ course }) => {
  return (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text>{course.description}</Text>
    </View>
  );
};

// CoursesPage component
const CoursesPage = ({ navigation }) => {
  return (
    <Background>
      <View style={styles.container}>
        <FlatList 
          data={coursesData}
          renderItem={({ item }) => <CourseItem course={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>


     {/* Footer navigation bar */}
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
          <Text style={{ color: 'black' }}>Courses</Text> {/* Highlight the current page */}
        </TouchableOpacity>
      </View>
    </Background>
  
  );
};

// Styles for the CoursesPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  courseItem: {
    padding: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  courseTitle: {
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
  // ... add other styles you might need
});

export default CoursesPage;
