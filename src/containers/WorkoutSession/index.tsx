import { Text } from "@rneui/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FC, useMemo, useState } from "react";
import { View } from "react-native";
import WorkoutProgress from "../../components/WorkoutProgress";
import { WorkoutSessions } from "../../types/workout";
import styles from "./styles";
import { WorkoutExcercise } from "../../components/WorkoutExcercise";
import { useWorkoutSteps } from "./hooks/useWorkoutSteps";
import { WorkoutFooter } from "../../components/WorkoutFooter";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@rneui/themed";

interface WorkoutSessionProps {
  workoutSession?: WorkoutSessions;
}

export const WorkoutSession: FC<WorkoutSessionProps> = ({
  workoutSession,
}: WorkoutSessionProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const {
    currentExcerciseIndex,
    workoutSteps,
    numberOfTotalExcercises,
    numberOfExcercisesLeft,
    gotoNextStep,
  } = useWorkoutSteps(workoutSession);
  return (
    <View
      style={[
        styles.root,
        { paddingTop: insets.top, backgroundColor: theme.colors.primary },
      ]}
    >
      <StatusBar style="dark" />
      <WorkoutProgress
        numberOfExcercisesLeft={numberOfExcercisesLeft}
        numberOfTotalExcercises={numberOfTotalExcercises}
      />
      <WorkoutExcercise excercise={workoutSteps[currentExcerciseIndex]} />
      <WorkoutFooter
        gotoNextStep={gotoNextStep}
        excercise={workoutSteps[currentExcerciseIndex]}
      />
    </View>
  );
};
