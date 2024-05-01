import {
  Button,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MainInput from '../common/components/_atom/MiniInput';
import MainButton from '../common/components/_atom/MainButton';
import { Colors } from '../style/color';


const AddOrEditBook = ({visible, onRequestClose}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide">
      <SafeAreaView>
        <Pressable>
            <Image source={require("../assets/close.jpg")} 
            style={styles.icon
            }/>
        </Pressable>
        <View style={{paddingHorizontal: 20}}>
          <MainInput options={{placeholder: 'book name'}} />
          <MainInput options={{placeholder: 'author name'}} />
          <MainInput options={{placeholder: ' price'}} />
          <MainInput options={{placeholder: 'cover URL'}} />
          <MainButton title="close modal" onPress={() => onRequestClose()} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddOrEditBook;

const styles = StyleSheet.create({
    icon : {
        height:30,
        width:30,
        resizeMode:"stretch",
        borderRadius:50,
        color: Colors.white,
        backgroundColor:Colors.mainColor

        
        

    }
});
