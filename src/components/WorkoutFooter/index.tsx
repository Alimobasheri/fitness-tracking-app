import { Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import { DoneButton } from "../customs/DoneButton";
import styles from "./styles";

interface WorkoutFooterProps {
  gotoNextStep: () => void;
}

export const WorkoutFooter: FC<WorkoutFooterProps> = ({
  gotoNextStep,
}: WorkoutFooterProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.wrapper}>
      <DoneButton onPress={gotoNextStep} />
    </View>
  );
};
