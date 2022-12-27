import { Text } from "@rneui/themed";
import { FC, useCallback } from "react";
import { Dimensions, FlatList, View } from "react-native";
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
    <View
      style={{
        paddingTop: 36,
      }}
    >
      <View
        style={{
          paddingHorizontal: 12,
        }}
      >
        <Text
          h4
          h4Style={{
            fontWeight: "400",
            lineHeight: 30,
            marginBottom: 12,
          }}
        >
          Overview Sessions
        </Text>
      </View>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <SessionCard session={item} redirect={redirect} />
        )}
        keyExtractor={(item) => item.sessionId.toString()}
        horizontal
        ItemSeparatorComponent={(props) => <View></View>}
        snapToInterval={(Dimensions.get("window").width / 3) * 2}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SessionsList;
