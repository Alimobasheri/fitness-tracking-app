import { Text, Button, useTheme } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import { Excercise } from "../../types/excercise";
import styles from "./styles";

interface WorkoutExcerciseProps {
  excercise: Excercise;
  gotoNextStep: () => void;
}
export const WorkoutExcercise: FC<WorkoutExcerciseProps> = ({
  excercise,
  gotoNextStep,
}: WorkoutExcerciseProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.root}>
      <View style={styles.topSection}>
        <View style={styles.excNameWrapper}>
          <Text h2 h2Style={{ color: theme.colors.primary }}>
            {excercise.name}
          </Text>
        </View>
        <View style={styles.excStatWrapper}>
          <Text h4 h4Style={{ color: theme.colors.grey2 }}>
            Sets: {excercise.setNumber} of {excercise.setsCount}
          </Text>
          <Text h4 h4Style={{ color: theme.colors.grey2 }}>
            Reps: {excercise.repsCount}
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Button onPress={gotoNextStep}>Done</Button>
      </View>
    </View>
  );
};
