import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  SafeAreaView,
} from "react-native";
import { COLORS, FONTS, icons, dummyData, images, SIZES } from "../constants";
import { HeaderBar } from "../components";

const CryptoDetail = ({ navigation }) => {
  //   function renderHeaderBar() {
  //     return <HeaderBar />;
  //   }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <HeaderBar right={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CryptoDetail;
