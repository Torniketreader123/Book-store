import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../style/color';

const AddButton = ({onAddPres}) => {
  return (
    <TouchableOpacity style={styles.cont}
    onPress={onAddPres}>

      <Image style={styles.image} source={require("../../../assets/plus.png")} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  cont: {
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  image:{
    tintColor:Colors.white,
    width:70,
    height:70

  }
});
