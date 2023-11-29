import React,{ useState, useEffect }  from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../components/Background'; // Assuming you have this component
import CourseDetails from './courseDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
      <Text style={styles.courseTitle}>{course.name}</Text>
      <Text>{course.description}</Text>
      <Text>Category: {course.category}</Text>
      <Text>Level: {course.level}</Text>
      <Text>Duration: {course.duration}</Text>
      <Text>Price: {course.price}</Text>
      <Text>Language: {course.primary_language}</Text>
    </View>
  );
};

const handleCoursePress = (course) => {
  navigation.navigate('CourseDetails', { course });
};


// CoursesPage component
const CoursesPage = ({ navigation }) => {
  // State to hold the courses and loading status
const [courses, setCourses] = useState([]);
const [isLoading, setIsLoading] = useState(false);


  // Fetch courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        // Retrieve the token from AsyncStorage
        const token = await AsyncStorage.getItem('token');
        console.log('Token:', token); // Log the token
  
        // Make the request with the token in the headers
        const response = await fetch('https://edutech-api-av5t.onrender.com/api/users/courses', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Error fetching courses:', response.status);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchCourses();
  }, []);
  
  
  return (
    <Background>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCoursePress(item)}>
                <CourseItem course={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
          />
        )}
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
