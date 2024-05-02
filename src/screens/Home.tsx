import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';
import Book from '../common/components/organisms/Book';
import AddButton from '../common/components/organisms/AddButton';
import AddorEditBooks from './AddorEditBooks';
import AddOrEditBook from './AddorEditBooks';

const Home = () => {
  const URL = 'https://66276592b625bf088c08330e.mockapi.io/book';
  const getListOfBooks = async () => {
    const response = await axios.get(URL);
    console.log(response.data);

    setData(response.data);
  };
  const addBook = async () => {
    try {
      const newBook = {
        author: 'robert patinson',
        nameOfBook: 'jorjia',
        price: '20',
        coverURL: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
      };
      const response = await axios.post(URL, newBook);
      Alert.alert('Book Added');
      getListOfBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getListOfBooks();
  }, []);

  const onDeleteHandler = async bookId => {
    const response = await axios.delete(
      `https://66276592b625bf088c08330e.mockapi.io/book/${bookId}`,
    );
    Alert.alert('Book Deleted');
    getListOfBooks();
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.col}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Book
            author={item.author}
            nameOfBook={item.name_of_book}
            price={item.price}
            coverURL={item.cover}
            onDeletePress={() => onDeleteHandler(item.id)}
            addBook={() => addBook(item)}
          />
        )}
      />

      <AddButton onAddPres={() => setModalVisible(true)} />
      <AddOrEditBook
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    paddingTop: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  col: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
