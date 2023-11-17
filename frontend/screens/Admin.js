import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import Background from '../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TeacherDashboard({ navigation }) {
  const user = {
    name: 'John Doe',
    language: 'Luganda Teacher',
    enrolledStudents: [
      { studentName: 'Student 1' },
      { studentName: 'Student 2' },
    ],
    wishlist: ['Science Advanced', 'Programming Basics']
  };

  const addCourse = () => {
    // Implement logic to add a new course
    console.log('Add Course');
  };

  const deleteCourse = (courseTitle) => {
    // Implement logic to delete the specified course
    console.log(`Delete Course: ${courseTitle}`);
  };

  const getAllCourses = () => {
    // Implement logic to get all courses
    console.log('Get All Courses');
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
          <Text style={styles.headerText}>Enrolled Students:</Text>
          <FlatList
            data={user.enrolledStudents}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <View style={styles.courseInfo}>
                  <Text>{item.studentName}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteCourse(item.studentName)}>
                  <Icon name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Add Course" onPress={addCourse} />
          <Button title="Get All Courses" onPress={getAllCourses} />
        </View>

        <View style={styles.wishlistContainer}>
          <Text style={styles.headerText}>Number of Wishlisted Courses:</Text>
          <Text>{user.wishlist.length}</Text>
        </View>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('')}>
          <Icon name="home" size={25} color="gray" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Admin')}>
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
  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#EDE7F6', // light purple color for the background
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    borderColor: '#D1C4E9', // slightly darker purple border color
    borderWidth: 1,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#7E57C2', // darker purple for the fill
    borderRadius: 10,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});
