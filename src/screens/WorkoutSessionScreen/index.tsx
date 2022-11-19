import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSession } from "../../containers/WorkoutSession";
import { WorkoutSessions } from "../../types/workout";
import { View } from "react-native";

export const WorkoutSessionScreeen = ({ route, navigation }) => {
  const { sessionId }: { sessionId: number } = route.params;
  const session: WorkoutSessions = useGetSession(sessionId);
  return (
    <View style={{ flex: 1 }}>
      <WorkoutSession workoutSession={session} />
    </View>
  );
};
