import { View } from "react-native";
import SessionsList from "../../containers/SessionsList";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessions } from "../../types/workout";

export const SessionsListScreen = ({ route, navigation }) => {
  const sessions: WorkoutSessions = useGetSession();

  return (
    <View style={{ flex: 1 }}>
      <SessionsList sessions={sessions} navigate={navigation.navigate} />
    </View>
  );
};
