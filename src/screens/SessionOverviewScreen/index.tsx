import SessionOverview from "../../containers/SessionOverview";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessionObject } from "../../types/workout";

export const SessionOverviewScreen = ({ route, navigation }) => {
  const { sessionId } = route.params;
  const session: WorkoutSessionObject = useGetSession(sessionId);
  return <SessionOverview session={session} navigate={navigation.navigate} />;
};
