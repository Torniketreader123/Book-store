import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../style/color';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.cont}>
      <Image source={require("")} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  cont: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});
