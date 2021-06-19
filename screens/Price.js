import React from "react";
import { Text, View } from "react-native";
import { FONTS, SIZES } from "../constants";

const Price = () => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{ ...FONTS.h2 }}>Price list screen</Text>
    </View>
  );
};

export default Price;
