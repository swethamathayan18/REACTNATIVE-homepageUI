// food items below the filter buttons in the homescreen

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Menuitem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 10 }}>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            time:item.time,
            rating: item.rating,
            adress: item.adress,
            cuisines: item.cuisines,
            cost_for_two: item.cost_for_two,
            menu:item.menu,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 6 }}
          style={{ aspectRatio: 5 / 6, height: 170 }}
          source={{ uri: item.image }}
        >
        
          <AntDesign
            style={{ position: "absolute", top: 10, right: 10 }}
            name="hearto"
            size={24}
            color="white"
          />
        </ImageBackground>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.rating}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}> . </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.time}mins
            </Text>
          </View>

          <Text style={{ fontSize: 16, color: "grey" }}>{item.adress}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,
                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 6,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 6 }}>
              FREE DELIVERY
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Menuitem;

const styles = StyleSheet.create({});
