import { Button, FAB, ListItem, Text, useTheme } from "@rneui/themed";
import { FC } from "react";
import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Excercise } from "../../types/excercise";
import { WorkoutSessionObject } from "../../types/workout";

export interface SessionOverviewProps {
  session: WorkoutSessionObject;
  navigate: (arg1: string, { arg0 }: { arg0: number }) => void;
}

export interface SessionOverviewRowProps {
  item: Excercise;
}

const SessionOverview: FC<SessionOverviewProps> = ({
  session,
  navigate,
}: SessionOverviewProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const onStartPress = () =>
    navigate("Session", { sessionId: session.sessionId });
  const rowRenderer = ({ item: excercise }: SessionOverviewRowProps) => {
    return (
      <View>
        <ListItem key={excercise.name} bottomDivider={!excercise.isSuperSet}>
          {!excercise.isSuperSet && (
            <Image
              source={excercise.imageSrc}
              style={{ width: 50, height: 50, resizeMode: "cover" }}
            />
          )}
          <ListItem.Content>
            <ListItem.Title>{excercise.name}</ListItem.Title>
            <ListItem.Subtitle style={{ color: theme.colors.grey2 }}>
              {Array.isArray(excercise.bodyPart)
                ? excercise.bodyPart.map((bp) => bp.name).join(", ")
                : excercise.bodyPart.name}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>{excercise.setsCount} sets</ListItem.Title>
            <ListItem.Subtitle right>
              {excercise.isTimerBased
                ? `${excercise.timerLimit} seconds`
                : `${excercise.repsCount} reps`}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        {excercise.isSuperSet &&
          excercise.superSetExcercises.map((exc, i) => (
            <ListItem
              bottomDivider={i === excercise.superSetExcercises.length - 1}
              containerStyle={{
                paddingLeft: 24,
              }}
            >
              <Image
                source={exc.imageSrc}
                style={{ width: 50, height: 50, resizeMode: "cover" }}
              />
              <ListItem.Content>
                <ListItem.Title>{exc.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {Array.isArray(exc.bodyPart)
                    ? exc.bodyPart.map((bp) => bp.name).join(", ")
                    : exc.bodyPart.name}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: 24,
          paddingLeft: 12,
        }}
      >
        <Text h1>{session.name}</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={session.session.excercises}
        renderItem={rowRenderer}
        keyExtractor={(item) => item.name}
      />
      <View
        style={{
          paddingBottom: insets.bottom,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Button
          title={"Start"}
          color={theme.colors.primary}
          containerStyle={{
            width: 150,
            borderRadius: 7,
          }}
          onPress={onStartPress}
        />
      </View>
    </View>
  );
};

export default SessionOverview;
