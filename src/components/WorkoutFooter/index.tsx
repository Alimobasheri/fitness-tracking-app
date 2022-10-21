import { Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DoneButton } from "../customs/DoneButton";
import styles from "./styles";

interface WorkoutFooterProps {
  gotoNextStep: () => void;
}

export const WorkoutFooter: FC<WorkoutFooterProps> = ({
  gotoNextStep,
}: WorkoutFooterProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      <DoneButton onPress={gotoNextStep} />
    </View>
  );
};
