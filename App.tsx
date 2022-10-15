import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WorkoutSession } from "./src/containers/WorkoutSession";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { defaultChestAndBicepsSessions } from "./src/constants/sessions";

const theme = createTheme({});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <WorkoutSession workoutSession={defaultChestAndBicepsSessions} />
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
