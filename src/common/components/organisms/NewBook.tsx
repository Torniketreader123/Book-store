import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const NewBook = () => {

    const URL = ('https://66276592b625bf088c08330e.mockapi.io/book')

    const getBook = async() => {
        const response = await axios.get(URL)

    }
    getBook();
    
  const addBook = async () => {
    try {
      const bookData = {
        cover : 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
        author: 'John Doe',
        name_of_book : "jon jounse",
        price: 20
      };

      const response = await axios.post(
        URL,
        bookData,
      );

      console.log('Book added successfully:', response.data);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };


  return (
   < View style = {styles.cont}>
    <Text style = {styles.WelcomeText} > welcome baby</Text>
  <Button  title='get Book' onPress={getBook}/>
  <Button title="Add Book" onPress={addBook} />
  </View>

);
};

export default NewBook;
 
const styles = StyleSheet.create({
    cont : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    WelcomeText : {
        fontSize: 23,
        textAlign: "center"
 }

})