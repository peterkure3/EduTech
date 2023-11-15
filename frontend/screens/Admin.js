import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [isDeleteCoursesModalVisible, setDeleteCoursesModalVisible] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    // Fetch users data from API
    fetch('https://edutech-api-av5t.onrender.com/api/getusers')
      .then(response => response.json())
      .then(json => setUsers(json));

    // Fetch courses data from API
    fetch('https://edutech-api-av5t.onrender.com/api/courses')
      .then(response => response.json())
      .then(json => setCourses(json));
  }, []);

  const handleCreateCourse = async () => {
    // Implement code to create a new course using Fetch API
    const newCourse = {
      title: newCourseTitle || 'New Course',
    };

    try {
      const response = await fetch('https://edutech-api-av5t.onrender.com/api/addcourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      const createdCourse = await response.json();
      setCourses([...courses, createdCourse]);

      // Clear the input fields after creating a course
      setNewCourseTitle('');
    } catch (error) {
      console.error('Failed to create course:', error);
    }
  };

  const handleDeleteCourses = async () => {
    // Implement code to delete all courses using Fetch API
    try {
      await fetch('https://edutech-api-av5t.onrender.com/api/allcourses', {
        method: 'DELETE',
      });

      setCourses([]);
    } catch (error) {
      console.error('Failed to delete courses:', error);
    } finally {
      // Close the modal after deletion
      setDeleteCoursesModalVisible(false);
    }
  };



  const renderCourseItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.courseActions}>
          <Button title="Delete" onPress={() => handleDeleteCourse(item.id)} />
          <Button title="Update" onPress={() => handleUpdateCourse(item.id, { description: 'Updated Description' })} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderUserData = ({ item }) => {
    return (
      <View style={styles.userItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const fetchCourses = async () => {
    try {
      const response = await fetch('https://edutech-api-av5t.onrender.com/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };

  useEffect(() => {
    // Fetch courses on component mount
    fetchCourses();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Edutech Admin Dashboard</Text>
      <Text style={styles.subHeader}>Users ({users.length})</Text>
      {/* Use FlatList for rendering users */}
      <FlatList
        data={users}
        renderItem={renderUserData}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.subHeader}>Available Courses ({courses.length})</Text>
      
      {/* Button to open the modal */}
      <Button title="Delete Courses" onPress={() => setDeleteCoursesModalVisible(true)} />

      {/* Modal component for confirmation */}
      <Modal
        visible={isDeleteCoursesModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete all courses?</Text>
            <Button title="Yes, Delete All" onPress={handleDeleteCourses} />
            <Button title="Cancel" onPress={() => setDeleteCoursesModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Text style={styles.subHeader}>Create new course</Text>
      <View style={styles.addCourseContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Title"
          value={newCourseTitle}
          onChangeText={text => setNewCourseTitle(text)}
        />
        <Button title="Create Course" onPress={handleCreateCourse} />
      </View>

      {/* Use FlatList for rendering courses */}
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
      <Text style={styles.subHeader}>Course List</Text>
      <Button title="Get Courses" onPress={fetchCourses} />

      {/* Display the list of courses */}
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            {/* Add any other course details you want to display */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  courseTitle: {
    fontSize: 18,
  },
  courseActions: {
    flexDirection: 'row',
  },
  addCourseContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedCourseItem: {
    backgroundColor: 'lightblue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AdminDashboard;
