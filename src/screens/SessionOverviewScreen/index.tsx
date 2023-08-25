import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList, SCREEN_NAMES } from "../../constants/navigation";
import SessionOverview from "../../containers/SessionOverview";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessionObject } from "../../types/workout";

type SessionOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SessionOverview"
>;

export const SessionOverviewScreen = ({
  route,
  navigation,
}: SessionOverviewScreenProps) => {
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
