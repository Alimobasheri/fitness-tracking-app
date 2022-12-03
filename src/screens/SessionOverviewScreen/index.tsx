import { View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SessionOverview from "../../containers/SessionOverview";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessionObject } from "../../types/workout";

export const SessionOverviewScreen = ({ route, navigation }) => {
  const { sessionId } = route.params;
  const insets = useSafeAreaInsets();
  const session: WorkoutSessionObject = useGetSession(sessionId);
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: Platform.OS === "android" ? insets.bottom + 6 : 0,
      }}
    >
      <SessionOverview session={session} navigate={navigation.navigate} />
    </View>
  );
};
