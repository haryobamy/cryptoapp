import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const HeaderBar = ({ right, label }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizotal: SIZES.padding,
        flexDirection: "row",
        marginTop: SIZES.padding,
      }}
    >
      <View
        style={{ flex: 1, marginLeft: SIZES.base, alignItems: "flex-start" }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: COLORS.gray }}
          />
          <Text style={{ marginLeft: SIZES.base, ...FONTS.h2 }}>Back</Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View
          style={{ flex: 1, alignItems: "flex-end", marginRight: SIZES.base }}
        >
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
