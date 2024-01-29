import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, createTheme } from "@rneui/themed";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/containers/Navigation";
import * as serviceWorkerRegistration from "./src/serviceWorkerRegisteration";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Provider } from "react-redux";
import { store } from "./src/core/store";

const theme = createTheme({});
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BottomSheetModalProvider>
            <View style={styles.container}>
              <Navigation />
              <StatusBar style="auto" />
            </View>
          </BottomSheetModalProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

serviceWorkerRegistration.register();
