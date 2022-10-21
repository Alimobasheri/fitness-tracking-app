import { Text, Button, useTheme, Divider } from "@rneui/themed";
import { FC } from "react";
import { View, Image } from "react-native";
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
          <Text
            h2
            h2Style={{
              color: theme.colors.black,
              fontWeight: "700",
              lineHeight: 42,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {excercise.name}
          </Text>
        </View>
        <Divider />
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
        <Button
          type={"outline"}
          containerStyle={styles.doneButtonContainerStyle}
          buttonStyle={styles.doneButtonStyle}
          onPress={gotoNextStep}
          color={theme.colors.white}
          titleStyle={{ color: theme.colors.primary }}
        >
          Done
        </Button>
      </View>
    </View>
  );
};
