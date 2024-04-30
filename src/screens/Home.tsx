import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Book from '../common/components/organisms/Book';


const Home = () => {
  const tempData = [
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
  ];

  const getListOfBooks = async () => {
    const response = await axios.get("https://66276592b625bf088c08330e.mockapi.io/book")
    console.log(response.data);
    
    setData(response.data)
  }

  const [data, setData] = useState([])

  useEffect(() => {
    getListOfBooks()
  }, []) 
  
 
  return ( 
    <View> 
      <FlatList
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.col}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Book author={item.author}  nameOfBook={item.name_of_book}
        price={item.price} coverURL={item.cover}
        
        />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    content:{
        paddingTop: 100,
        justifyContent:"space-between",
        paddingHorizontal:30
    },
    col:{
        flex:1,
        justifyContent:"space-around"
    }
});