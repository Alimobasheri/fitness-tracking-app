import { FC, useEffect, useState, memo, useMemo, useRef } from "react";
import { View } from "react-native";
import { LinearProgress, Text, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import numberWithZeroPlace from "../../core/helpers/numberWithZeroPlace";

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
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef<number>(seconds);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setSeconds(secondsRef.current + 1);
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  useEffect(() => {
    secondsRef.current = seconds;
  }, [seconds]);
  const minutesAndSeconds: string[] = [
    ("0" + Math.floor(seconds / 60)).slice(-2),
    ("0" + Math.floor(seconds % 60)).slice(-2),
  ];
  useEffect(() => {
    const newProgress =
      (numberOfTotalExcercises - numberOfExcercisesLeft - 1) /
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
      <LinearProgress
        value={progress}
        variant={"determinate"}
        animation={{ duration: 100 }}
        color={theme.colors.primary}
      />
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Text h1 style={styles.leftNumber} adjustsFontSizeToFit>
            {numberWithZeroPlace(numberOfExcercisesLeft)}
          </Text>
          <View style={styles.leftTextWrapper}>
            <Text h4 h4Style={[styles.leftText, { color: theme.colors.grey2 }]}>
              Excercises
            </Text>
            <Text h4 h4Style={[styles.leftText, { color: theme.colors.grey2 }]}>
              Left
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.timeWrapper}>
        <Text
          h4
          h4Style={{ ...styles.timetitleText, color: theme.colors.grey2 }}
        >
          Total Time
        </Text>
        <View style={styles.timeBody}>
          <Text h4 h4Style={styles.timeText}>
            {minutesAndSeconds[0]}
          </Text>
          <Text h4 h4Style={styles.timeText}>
            :
          </Text>
          <Text h4 h4Style={styles.timeText}>
            {minutesAndSeconds[1]}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default memo(WorkoutProgress);
