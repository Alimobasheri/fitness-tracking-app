import { Text, useTheme } from "@rneui/themed";
import { View, ScrollView } from "react-native";
import SessionsList from "../../containers/SessionsList";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessionObject } from "../../types/workout";
import LottieView from "lottie-react-native";
import AnimateBycicleLottie from "../../../assets/24249-girl-on-the-bicycle.json";

export const FeedScreen = ({ route, navigation }) => {
  const sessions: WorkoutSessionObject[] = useGetSession();
  const { theme } = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 24,
          marginVertical: 24,
          alignItems: "center",
        }}
      >
        <LottieView
          autoPlay
          style={{
            width: "100%",
            position: "relative",
            backgroundColor: "transparent",
          }}
          source={AnimateBycicleLottie}
        />
        <Text
          style={{
            lineHeight: 22,
            fontSize: 18,
            fontWeight: "300",
          }}
          numberOfLines={4}
        >
          It's time to free the soul and start exercising!
        </Text>
      </View>
      <SessionsList sessions={sessions} navigate={navigation.navigate} />
    </ScrollView>
  );
};
