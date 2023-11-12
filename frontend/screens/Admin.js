import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const AdminDashboard = () => {
  const navigation = useNavigation();
  const [courses, setCourses] = useState([]); // State variable to hold courses data
  const [users, setUsers] = useState([]); // State variable to hold users data

  useEffect(() => {
    // Fetch courses data from the API
    axios.get('https://edutech-api-av5t.onrender.com/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch users data from the API
    axios.get('https://edutech-api-av5t.onrender.com/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePostCourse = async () => {
    // Implement code to handle posting a new course
  };

  const handleDeleteCourse = async (courseId) => {
    // Implement code to handle deleting a course
  };

  const handleRenameCourse = async (courseId, newName) => {
    // Implement code to handle renaming a course
  };

  const handleUpdateCourse = async (courseId, updatedData) => {
    // Implement code to handle updating a course
  };

  const handlePostUser = async () => {
    // Implement code to handle posting a new user
  };

  const handleDeleteUser = async (userId) => {
    // Implement code to handle deleting a user
  };

  const handleRenameUser = async (userId, newName) => {
    // Implement code to handle renaming a user
  };

  const handleUpdateUser = async (userId, updatedData) => {
    // Implement code to handle updating a user
  };

  const renderCourseItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.courseActions}>
          <Button title="Post" onPress={() => handlePostCourse(item.id)} />
          <Button title="Delete" onPress={() => handleDeleteCourse(item.id)} />
          <Button title="Rename" onPress={() => handleRenameCourse(item.id, 'New Course Name')} />
          <Button title="Update" onPress={() => handleUpdateCourse(item.id, { title: 'Updated Course Title' })} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderUserItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.userItem}>
        <Text style={styles.userName}>{item.name}</Text>
        <View style={styles.userActions}>
          <Button title="Post" onPress={() => handlePostUser(item.id)} />
          <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          <Button title="Rename" onPress={() => handleRenameUser(item.id, 'New User Name')} />
          <Button title="Update" onPress={() => handleUpdateUser(item.id, { name: 'Updated User Name' })} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Edutech Admin Dashboard</Text>
      <Text style={styles.subHeader}>Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.subHeader}>Users</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // Set the background color to white
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple', // Set the text color to purple
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'purple', // Set the text color to purple
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'purple', // Set the background color to purple
    borderRadius: 5,
  },
  courseTitle: {
    fontSize: 18,
    color: 'white', // Set the text color to white
  },
  courseActions: {
    flexDirection: 'row',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'purple', // Set the background color to purple
    borderRadius: 5,
  },
  userName: {
    fontSize: 18,
    color: 'white', // Set the text color to white
  },
  userActions: {
    flexDirection: 'row',
  },
});
  
  export default AdminDashboard;