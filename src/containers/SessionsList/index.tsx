import { FC, useCallback } from "react";
import { FlatList } from "react-native";
import SessionCard from "../../components/SessionCard";
import { WorkoutSessionObject } from "../../types/workout";

export interface SessionsListProps {
  sessions: WorkoutSessionObject[];
  navigate: () => void;
}

const SessionsList: FC<SessionsListProps> = ({
  sessions,
  navigate,
}: SessionsListProps) => {
  const redirect = useCallback(
    (sessionId: number) => navigate("SessionOverview", { sessionId }),
    [JSON.stringify(sessions), navigate]
  );
  return (
    <FlatList
      data={sessions}
      renderItem={({ item }) => (
        <SessionCard session={item} redirect={redirect} />
      )}
      keyExtractor={(item) => item.sessionId.toString()}
    />
  );
};

export default SessionsList;
