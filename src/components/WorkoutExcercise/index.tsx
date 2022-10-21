import { Text, Button, useTheme, Divider } from "@rneui/themed";
import { FC } from "react";
import { View, Image } from "react-native";
import { Excercise } from "../../types/excercise";
import styles from "./styles";

interface WorkoutExcerciseProps {
  excercise: Excercise;
}
export const WorkoutExcercise: FC<WorkoutExcerciseProps> = ({
  excercise,
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
      {excercise.imageSrc && (
        <Image
          source={excercise.imageSrc}
          style={{
            flex: 1,
            height: "100%",
            maxWidth: "100%",
            resizeMode: "contain",
          }}
        />
      )}
    </View>
  );
};
