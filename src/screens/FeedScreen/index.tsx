import { useTheme } from "@rneui/themed";
import { View } from "react-native";
import SessionsList from "../../containers/SessionsList";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessions } from "../../types/workout";

export const FeedScreen = ({ route, navigation }) => {
  const sessions: WorkoutSessions = useGetSession();
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      <SessionsList sessions={sessions} navigate={navigation.navigate} />
    </View>
  );
};
