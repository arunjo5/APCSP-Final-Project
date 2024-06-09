import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { setDestinaton, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    locationName: "Home",
    description: "59 Evergreen Dr, East Windsor, NJ",
    location: { lat: 40.257841, lng: -74.551878 },
  },
  {
    id: "456",
    icon: "briefcase",
    locationName: "Work",
    description: "346 Clarksville Rd, Princeton Junction, NJ",
    location: { lat: 40.305337, lng: -74.619864 },
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const handlePress = (location, description) => {
    const currentScreen = route.name;

    console.log(`screen ${currentScreen}`);

    if (currentScreen === "HomeScreen") {
      dispatch(
        setOrigin({
          location: location,
          description: description,
        })
      );
      navigation.navigate("MapScreen");
    }

    if (currentScreen === "NavigateCard") {
      dispatch(
        setDestinaton({
          location: location,
          description: description,
        })
      );
      navigation.navigate("RideOptionsCard");
    }

    if (currentScreen === "RideOptionsCard") {
      // dispatch(
      //   // setDestinaton({
      //   //   location: location,
      //   //   description: description,
      //   // })
      // );
      navigation.navigate("ConfirmationCard");
    }

  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-px" />}
      renderItem={({ item: { icon, locationName, description, location } }) => (
        <TouchableOpacity
          className="flex-row items-center m-5"
          onPress={() => handlePress(location, description)}
        >
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{locationName}</Text>
            <Text className="text-gray-500">{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
