import React from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';

const FeedScreen = () => {
    const feedData=[
        {
            id: 1,
            author: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            id: 2,
            author: 'Jane Doe',
            content: 'Pellentesque ac ex nec diam cursus pellentesque ut vel ipsum.',
          },
    ];

    const renderFeedItem = ({ item }) => {
        return (
          <View style={styles.feedItem}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        );
      };

return(
    <View style={styles.container}>
        <Text style={styles.title}>What's New</Text>
        <FlatList
        data={feedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.feedList}
      />
    </View>
);
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    feedList: {
      width: '100%',
    },
    feedItem: {
      marginBottom: 20,
    },
    author: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    content: {
      fontSize: 16,
    },
  });

export default FeedScreen;