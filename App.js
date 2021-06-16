// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import "react-native-gesture-handler";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { CryptoDetail, Transaction } from "./screens";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShowrn: false,
//         }}
//         initialRouteName={"Home"}
//       >
//         <Stack.Screen name="Home" component={Tabs} />
//         <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
//         <Stack.Screen name="Transaction" component={Transaction} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import "react-native-gesture-handler";
// import { NavigationContainer, StackActions } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { CryptoDetail, Transaction } from "./screens";

// import Home from "./screens/Home";

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       <NavigationContainer>
//         <StackActions.Navigator
//           screenOption={{ headerShown: false }}
//           initialRouteName={"Home"}
//         >
//           <Stack.Screen name="Home" component={Tabs} />
//           <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
//           <Stack.Screen name="Transaction" component={Transaction} />
//         </StackActions.Navigator>
//       </NavigationContainer>

//       {/* <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Home />
//         <StatusBar style="auto" />
//       </View> */}
//     </>
//   );
// }

import React from "react";
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
