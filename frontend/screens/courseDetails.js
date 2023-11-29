// CourseDetails.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CourseDetails = ({ route }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default CourseDetails;
