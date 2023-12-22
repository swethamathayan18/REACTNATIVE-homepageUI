import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { MaterialIcons } from '@expo/vector-icons';

const Getquickly = () => {
  const data = quickfood;
  return (
    <View style={{ margin: 8 }}>
      <Text style={{ fontWeight: "bold",fontSize:18 }}>Get it quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 12 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 28,
                  fontWeight: 900,
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text
              style={{ marginTop: 6, fontWeight:"bold",fontSize:16 }}
            >
              {item.name} 
            </Text>
            <View style={{flexDirection:"row", fontSize:16,fontWeight:"bold",marginTop:5}}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text  style={{fontSize:15,fontWeight:"bold"}}>{item.rating}</Text>
                <Text style={{fontSize:15,fontWeight:"bold"}}> . </Text>
                <Text style={{fontSize:15,fontWeight:"bold"}}>{item.time}mins</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Getquickly;
