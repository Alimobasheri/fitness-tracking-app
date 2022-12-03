import { Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Excercise } from "../../types/excercise";
import { DoneButton } from "../customs/DoneButton";
import styles from "./styles";

interface WorkoutFooterProps {
  gotoNextStep: () => void;
  excercise: Excercise;
}

export const WorkoutFooter: FC<WorkoutFooterProps> = ({
  gotoNextStep,
  excercise,
}: WorkoutFooterProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom + 12 }]}>
      <DoneButton
        onPress={gotoNextStep}
        isTimerBased={excercise.isTimerBased}
        timerLimit={excercise.timerLimit}
      />
    </View>
  );
};
