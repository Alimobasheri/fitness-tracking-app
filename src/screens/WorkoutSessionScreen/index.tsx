import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSession } from "../../containers/WorkoutSession";
import { WorkoutSessionObject } from "../../types/workout";
import { View } from "react-native";
import { useEffect } from "react";

export const WorkoutSessionScreeen = ({ route, navigation }) => {
  const { sessionId }: { sessionId: number } = route.params;
  const session: WorkoutSessionObject = useGetSession(sessionId);
  useEffect(() => {
    navigation.setOptions({
      title: !!session?.name ? session.name : "Session",
    });
  }, [session?.name]);
  return (
    <View style={{ flex: 1 }}>
      <WorkoutSession workoutSession={session?.session} />
    </View>
  );
};
