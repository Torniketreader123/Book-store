import axios from "axios";
import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-svg";

interface Book {
  id: string;
  name_of_book: string;
  author: string;
  cover: string;
}

const HomeScreen = () => {
  const URL = 'https://66276592b625bf088c08330e.mockapi.io/books';
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async () => {
    try {
      const response = await axios.post(URL, {
        author: 'ahmed',
        cover: 'https://pngtree.com/freepng/winter-scenery-withered-and-yellow-maple-leaf-aesthetic-book-cover_6943417.html',
        name_of_book: 'ahmde kmsa',
      });
      console.log('Book added:', response.data);
      getBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      console.log('Book deleted:', response.data);
      getBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const editBook = async (id: string) => {
    try {
      const response = await axios.put(`${URL}/${id}`, {
        author: 'ahmed',
        cover: 'https://pngtree.com/freepng/winter-scenery-withered-and-yellow-maple-leaf-aesthetic-book-cover_6943417.html',
        name_of_book: 'ahmde ahmeda',
      });
      console.log('Book edited:', response.data);
      getBooks();
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>This is my home</Text>
      <Button title="Add book" onPress={addBook} />
      <View style={styles.buttonContainer}>
        {books.map((book) => (
          <View key={book.id} style={styles.bookItem}>
            <Image sourc={{ uri: book.cover }} style={styles.bookCover} />
            <View style={styles.bookDetails}>
              <Text>{book.name_of_book}</Text>
              <Text>{book.author}</Text>
            </View>
            <View style={styles.buttonGroup}>
              <Button title="Delete" onPress={() => deleteBook(book.id)} />
              <Button title="Edit" onPress={() => editBook(book.id)} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookCover: {
    width: 50, 
    height: 50, 
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});