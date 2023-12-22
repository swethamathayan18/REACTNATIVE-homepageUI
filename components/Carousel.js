import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const CarouselImg = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Image
          source={require("../assets/images/image1.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/images/image2.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/images/image3.jpg")}
          style={styles.image}
        />
      </View>
    </Swiper>
  );
};

export default CarouselImg;

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    padding: 7,
  },
  slide: {
    flex: 1,
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: "cover",
  },
  
});
