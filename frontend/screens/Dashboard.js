import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, FlatList, Image } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';





export default function Dashboard({ navigation }) {
  const { t, i18n } = useTranslation();
  const [languageModalVisible, setLanguageModalVisible] = React.useState(false);
  // const languages = [('Kiswahili'), ('Lutoro'), ('French'), ('Chinese'), ('Luganda')];
  const languages = ['en', 'es', 'fr', 'de', 'lg'];
  
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setLanguageModalVisible(false);
  };
  
  
  const localImages = {
    course1: require('../assets/course1.png'),
    course2: require('../assets/course2.png'),
    // and so on for other images
  };
  
  const courses = [
    {
      title: ('Political Studies'),
      description: ('Entire world'),
      image: localImages.course1,
    },
    {
      title: ('Geography'),
      description: ('Africa'),
      image: localImages.course2,
    },
    {
      title: ('Science'),
      description: ('Body structure'),
      image: localImages.course2,
    },
    {
      title: ('History'),
      description: ('Rest of the world'),
      image: localImages.course1,
    },
    // ...more courses
  ];

  const handleCoursePress = (course) => {
    // You can use navigation.navigate to navigate to another page
    // Replace 'CourseDetails' with the name of the screen you want to navigate to
    navigation.navigate('CourseDetails', { course });
  };
  
  
  
  const suggestedTeachers = [
    { name: ('john doe'), likes: 320 },
    { name: ('allan smith'), likes: 210 },
    { name: ('gensi collin'), likes: 540 },
  ];

  return (
    <Background>
      <ScrollView style={{ flex: 1, paddingBottom: 70}}>
      <TouchableOpacity style={styles.languageSelector} onPress={() => handleLanguageChange("lg")}>
        <Icon name="language" size={24} color="gray" />
      </TouchableOpacity>

        
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="gray" />
          <TextInput 
            style={styles.searchBar}
            placeholder= {t("Search for courses...")}
          />
        </View>

        <Header>Homepage</Header>
        

        <View style={styles.banner}>
          <Image
            source={require('../assets/banner1.jpg')} // Replace with your local image
            // Or for a remote image, use: {uri: 'https://example.com/image.jpg'}
            resizeMode="cover" // or "contain", depending on how you want to fit the image within the banner space
            style={StyleSheet.absoluteFill} // This will make the image fill the entire banner area
          />
          <Text style={{ zIndex: 1 }}></Text>
        </View>


        <View style={styles.courseGrid}>
          {courses.map((course, idx) => (
            <View key={idx} style={styles.courseBox}>
              <Image
                source={course.image}
                style={styles.courseImage}
              />
              <Text style={styles.courseBoxTitle}>{course.title}</Text>
              <Text style={styles.courseBoxDescription}>{course.description}</Text>
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

      <Modal
        transparent={true}
        animationType="slide"
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.courseGrid}>
          {courses.map((course, idx) => (
            <TouchableOpacity key={idx} onPress={() => handleCoursePress(course)}>
              <View style={styles.courseBox}>
                <Image
                  source={course.image}
                  style={styles.courseImage}
                />
                <Text style={styles.courseBoxTitle}>{course.title}</Text>
                <Text style={styles.courseBoxDescription}>{course.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

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
    // Add this to ensure the image is not stretched
    overflow: 'hidden', 
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
  languageSelector: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  modalContainer: {
    marginTop: 150,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  languageOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    height: 200, // Adjust the height as needed
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden', // Ensures the image does not spill out of the banner's rounded corners
  },
  courseImage: {
    width: '100%', // Take up all available width
    height: 100, // Set a fixed height for images
    borderRadius: 8, // Optional: if you want rounded corners
  },
  
  
});
