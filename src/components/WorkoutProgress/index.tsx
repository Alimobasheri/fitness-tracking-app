import { FC, useEffect, useState, memo } from "react";
import { View } from "react-native";
import { LinearProgress, Text, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

interface WorkoutProgressProps {
  numberOfExcercisesLeft: number;
  numberOfTotalExcercises: number;
}

export const WorkoutProgress: FC<WorkoutProgressProps> = ({
  numberOfExcercisesLeft,
  numberOfTotalExcercises,
}: WorkoutProgressProps) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const newProgress =
      (numberOfTotalExcercises - numberOfExcercisesLeft) /
      numberOfTotalExcercises;
    if (newProgress !== progress) setProgress(newProgress);
  }, [numberOfExcercisesLeft, numberOfTotalExcercises]);
  return (
    <LinearGradient
      colors={["rgba(32, 137, 220, 0.2)", "transparent", "transparent"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[progress, progress, 1]}
      style={[styles.root]}
    >
      <LinearProgress value={progress} variant={"determinate"} animation={{duration: 100}}/>
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Text h1 style={styles.leftNumber}>
            {numberOfExcercisesLeft}
          </Text>
          <View style={styles.leftTextWrapper}>
            <Text h4 h4Style={[styles.leftText, { color: theme.colors.grey3 }]}>
              Excercises
            </Text>
            <Text h4 h4Style={[styles.leftText, { color: theme.colors.grey3 }]}>
              Left
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default memo(WorkoutProgress);
