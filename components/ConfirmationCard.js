import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";

const ConfirmationCard = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedRide } = route.params;

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Your Booking:</Text>
      </View>

      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: selectedRide.image }}
        />
        <View className="-ml-6">
          <Text className="text-xl font-semibold">{selectedRide.title}</Text>
          <Text>{selectedRide.capacity}</Text>
        </View>
      </View>

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          className="bg-black py-3 m-3"
          onPress={() => {
            alert(`Your booking is confirmed for ${selectedRide.title}.`);
          }}
        >
          <Text className="text-center text-white text-xl">
            Confirm {selectedRide.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bgGray: {
    backgroundColor: "rgb(229, 231, 235)",
  },
});
