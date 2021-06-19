import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { HeaderBar } from "../components";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const SectionTitle = ({ title }) => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{ ...FONTS.h3, color: COLORS.black }}>{title}</Text>
    </View>
  );
};

const Settings = () => {
  const [faceId, setFaceId] = useState(true);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
        }}
      >
        <View
          style={{ flex: 1, marginLeft: SIZES.base, alignItems: "flex-start" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginLeft: SIZES.base, ...FONTS.h1 }}>Profile</Text>
          </View>
        </View>
      </View>
    );
  }

  const Setting = ({ value, type, title, onPress }) => {
    if (type == "button") {
      return (
        <TouchableOpacity
          style={{ height: 50, flexDirection: "row", alignItems: "center" }}
          onPress={onPress}
        >
          <Text style={{ ...FONTS.h3, flex: 1 }}>{title}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, marginRight: SIZES.radius }}>
              {value}
            </Text>
            <Image
              source={icons.right_arrow}
              resizeMode="contain"
              style={{
                height: 15,
                width: 15,
                tintColor: COLORS.primary,
              }}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={{ flexDirection: "row", alignItems: "center", height: 50 }}
        >
          <Text style={{ ...FONTS.h3, flex: 1 }}>{title}</Text>
          <Switch value={value} onValueChange={() => onPress(value)} />
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGray,
      }}
    >
      <View>
        {/* Header */}

        {renderHeader()}

        {/* details */}

        {/* email and name section */}
        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          {/* email and id */}
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.h3, textTransform: "uppercase" }}>
              Haryobamy.badmus@gmail.com
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>
              ID : 4574839
            </Text>
          </View>
          {/* status */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: COLORS.green,
                ...FONTS.body4,
                marginLeft: SIZES.base,
              }}
            >
              Verified
            </Text>
          </View>
        </View>
        {/* app */}
        <SectionTitle title="APP" />
        <Setting
          title="Lunch Screen"
          type="button"
          value="Home"
          onPress={() => console.log("pressed")}
        />
        <Setting
          title="Appearance"
          type="button"
          value="Dark"
          onPress={() => console.log("pressed")}
        />

        {/* Account */}
        <SectionTitle title="ACCOUNT" />
        <Setting
          title="Payment Currency"
          type="button"
          value="USD"
          onPress={() => console.log("pressed")}
        />
        <Setting
          title="Language"
          type="button"
          value="English"
          onPress={() => console.log("pressed")}
        />
        {/* security */}
        <SectionTitle title="SECURITY" />
        <Setting
          title="FaceID"
          type="switch"
          value={faceId}
          onPress={(value) => setFaceId(value)}
        />
        <Setting
          title="Password"
          type="button"
          value={true}
          onPress={() => console.log("pressed")}
        />
        <Setting
          title="Change Password"
          type="button"
          value={true}
          onPress={() => console.log("pressed")}
        />
        <Setting
          title="2FA Authentication"
          type="button"
          value={true}
          onPress={() => console.log("pressed")}
        />
      </View>
    </ScrollView>
  );
};

export default Settings;
