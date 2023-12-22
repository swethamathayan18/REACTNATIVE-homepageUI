// Menu screen or second screen


import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image
} from "react-native";
import Modal from "react-native-modal"
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import { useSelector } from "react-redux";
import { Cart } from "../Redux/CartReducer";

const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.Cart);
  console.log(cart);
  const route = useRoute();
  const navigation = useNavigation();
  const [menu,setMenu] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);
  useEffect(() =>{
    const fetchMenu = () =>{
      setMenu(route.params.menu);
    }
    fetchMenu();
  },[]);

 const toggleModal = () =>{
  setModalVisible(!ModalVisible);
 }

  return (
    <>
      <ScrollView style={{ marginTop: 35 }}>
        <View
          style={{
            height: 310,
            backgroundColor: "#B0C4DE",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Ionicons
              name="arrow-back-sharp"
              size={28}
              color="black"
              onPress={() => navigation.goBack()}
            />
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="ios-search" size={24} color="black" />
              <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 3 }}>
                Search
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 210,
              backgroundColor: "white",
              marginHorizontal: 20,
              marginVertical: 5,
              borderRadius: 15,
              padding: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="share-social-sharp" size={24} color="black" />
                <AntDesign
                  name="hearto"
                  size={24}
                  color="black"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 3 }}>
                {route.params.rating}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}> - </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {route.params.time}mins
              </Text>
            </View>
            <Text style={{ fontSize: 16, marginTop: 7 }}>
              {route.params.cuisines}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Outlet</Text>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>
                {route.params.adress}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>22 mins</Text>
              <Text style={{ fontSize: 16, marginLeft: 10 }}>Home</Text>
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1, 
                marginVertical: 10,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bike-fast"
                size={24}
                color="orange"
              />

              <Text style={{ fontSize: 16, marginLeft: 7 }}>0-3 Kms |</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 7 }}>
                35 Deleivery Fee will apply
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "semibold",
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          MENU
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />

        {route.params.menu.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}
      </ScrollView>


      {/* floating menu button */}
      <Pressable onPress={toggleModal}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "black",
          alignItems: "center",
          position: "absolute",
          marginLeft: "auto",
          alignContent: "center",
          right: 25,
          bottom: 30,
        }}
      >
        <MaterialIcons name="menu-book" size={24} color="white" style={{marginTop:5}}/>
        <Text style={{ color: "white",fontWeight:"bold"}}>MENU</Text>
      </Pressable>

      <Modal isVisible={ModalVisible} onBackdropPress={toggleModal}>
        <View style={{height:190,width:250,backgroundColor:"black",position:"absolute",bottom:80,right:5,borderRadius:7}}>
          {menu.map((item,i) =>(
            <View style={{padding:10, flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} key={i}>
              <Text style={{color:"white",fontWeight:600,fontSize:19}}>{item.name}</Text>
              <Text style={{color:"white",fontWeight:600,fontSize:19}}>{item.items.length}</Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
