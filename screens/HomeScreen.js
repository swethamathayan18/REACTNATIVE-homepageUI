import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import React from "react";
import CarouselImg from "../components/Carousel";
import FoodType from "../components/FoodType";
import Getquickly from "../components/Getquickly";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Menuitem from "../components/Menuitem";
import hotels from "../data/hotels"

const HomeScreen = () => {
  const  data= hotels;
  return (
    <ScrollView style={styles.container}>
      {/* search bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Restaurant item or more "
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      {/* carousel */}
      {/* <CarouselImg /> */}
      <View>
        <CarouselImg />
      </View>

      {/* Food types */}
      <FoodType />

      {/* get quickly component */}
      <Getquickly />

      {/* filter buttons */}
      <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <Pressable
          style={{
            borderWidth: 2,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            padding:7,
            width:100
          }}
        >
          <Text style={{fontSize:16,fontWeight:"bold"}}>Filter</Text>
          <MaterialCommunityIcons
            name="filter-variant"
            size={22}
            color="black"
          />
        </Pressable>

        <Pressable
          style={{
            borderWidth: 2,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            width:120
          }}
        >
          <Text style={{fontSize:16,fontWeight:"bold"}}>Sort By Rating</Text>
        </Pressable>

        <Pressable
          style={{
            borderWidth: 2,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            width:120
          }}
        >
          <Text style={{fontSize:16,fontWeight:"bold"}}>Sort By Price</Text>
        </Pressable>
      </View>


      {/* Menu item */}
          {data.map((item,index) => (
            <Menuitem key={index} item={item} />
          ))}


    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // Adjust for status bar height
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#C0C0C0",
    borderRadius: 7,
    padding: 6,
    margin: 10,
  },
});
