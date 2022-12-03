import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SessionsList from "../../containers/SessionsList";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessions } from "../../types/workout";

export const SessionsListScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const sessions: WorkoutSessions = useGetSession();

  return (
    <View style={{ flex: 1, marginBottom: insets.bottom }}>
      <SessionsList sessions={sessions} navigate={navigation.navigate} />
    </View>
  );
};
