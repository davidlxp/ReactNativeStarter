import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeRefresh</Text>

      <Button
        onPress={() => navigation.navigate("Map")}                // for navigating to another tab
        title="Go to Map"
      />
      <Button
        title="Go to List"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate("Square")}
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
      </TouchableOpacity> */}

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
});

export default HomeScreen;
