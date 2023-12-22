import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const FoodType = () => {
  const types = [
    {
      id: "0",
      image: "https://i.pinimg.com/236x/61/f5/51/61f551106eb3f3060d2655873537ab66.jpg",
      name: "Biriyani",
    },
    {
      id: "1",
      image: "https://i.pinimg.com/236x/70/0e/21/700e216a6f99664027a7bce91c58482b.jpg",
      name: "Salad",
    },
    {
      id: "2",
      image: "https://i.pinimg.com/236x/6d/ca/2c/6dca2c9ef4779246c5354a53f7d8b0ee.jpg",
      name: "Dessert",
    },
    {
      id: "3",
      image: "https://i.pinimg.com/564x/27/d5/23/27d523af3f6d343a789bf70c1f76e2f7.jpg",
      name: "Burger",
    },
    {
      id: "4",
      image: "https://i.pinimg.com/236x/fb/d7/a5/fbd7a5652fca495ce1c40ddd017402a3.jpg",
      name: "Sandwiches",
    },
  ];

  return (
    <View style={{marginTop:0}}>
      <Text style={{ margin: 8, fontWeight: "bold",fontSize:18}}>What's on your mind?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70, borderRadius: 35 }}
            />
            <Text style={{ marginTop: 6, textAlign: "center", fontWeight: "bold",fontSize:16}}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodType;

const styles = StyleSheet.create({});
