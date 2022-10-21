import { Text, Button, useTheme, Divider, Icon } from "@rneui/themed";
import { FC, useEffect, useLayoutEffect } from "react";
import { View, Pressable } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Excercise } from "../../types/excercise";
import styles from "./styles";

interface WorkoutExcerciseProps {
  excercise: Excercise;
}
export const WorkoutExcercise: FC<WorkoutExcerciseProps> = ({
  excercise,
}: WorkoutExcerciseProps) => {
  const { theme } = useTheme();
  const animationIndex = useSharedValue(0);
  const imageResizeMode = useDerivedValue(
    () => (animationIndex.value > 1 ? "contain" : "cover"),
    [animationIndex.value]
  );
  const bgStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      animationIndex.value,
      [0, 1, 2],
      [
        "rgba(32, 137, 220, 1)",
        "rgba(32, 137, 220, 0.55)",
        "rgba(32, 137, 220, 0)",
      ]
    );
    return {
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "column",
      paddingHorizontal: 36,
      backgroundColor: bgColor,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      width: "auto",
      height: "100%",
      resizeMode: imageResizeMode.value,
    };
  }, [imageResizeMode.value]);

  const wrappersStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationIndex.value, [1, 2], [1, 0]);
    return {
      flexDirection: "row",
      padding: 8,
      marginBottom: 6,
      borderRadius: 6,
      backgroundColor: "rgba(60, 132, 220, 0.8)",
      width: "auto",
      opacity,
    };
  }, [animationIndex.value]);
  useLayoutEffect(() => {
    if (excercise.isRest) {
      animationIndex.value = withTiming(0);
    } else {
      animationIndex.value = withSequence(
        withTiming(0, { duration: 0 }),
        withDelay(300, withTiming(1, { duration: 300 }))
      );
    }
  }, [excercise.name]);
  useLayoutEffect(() => {
    if (animationIndex.value === 0) {
      animationIndex.value = withTiming(1, { duration: 600 });
    }
  }, []);

  const handlePressIn = () => {
    animationIndex.value = withTiming(2, { duration: 300 });
  };
  const handlePressOut = () => {
    animationIndex.value = withTiming(1, { duration: 300 });
  };
  return (
    <Pressable
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
      style={styles.root}
    >
      <View
        style={{
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {excercise.imageSrc && (
          <Animated.Image source={excercise.imageSrc} style={imageStyle} />
        )}
      </View>
      <Animated.View style={bgStyle}>
        <View style={styles.topSection}>
          <View
            style={[
              styles.excNameWrapper,
              {
                // backgroundColor: theme.colors.grey5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
              },
            ]}
          >
            <Text
              h2
              h2Style={{
                color: theme.colors.white,
                fontWeight: "600",
                lineHeight: 42,
                textAlign: "center",
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {excercise.name}
            </Text>
          </View>
          {!excercise.isRest && (
            <View style={styles.excStatWrapper}>
              <Animated.View style={wrappersStyle}>
                <Icon
                  size={20}
                  type={"material-community"}
                  name={"weight-lifter"}
                  color={theme.colors.success}
                  containerStyle={{ marginRight: 6 }}
                />
                <Text
                  h4
                  h4Style={{
                    fontSize: 16,
                    color: theme.colors.white,
                    fontWeight: "400",
                  }}
                >
                  Sets: {excercise.setNumber} of {excercise.setsCount}
                </Text>
              </Animated.View>
              <Animated.View style={wrappersStyle}>
                <Icon
                  size={20}
                  type={"ionicons"}
                  name={"repeat"}
                  color={theme.colors.warning}
                  containerStyle={{ marginRight: 6 }}
                />
                <Text
                  h4
                  h4Style={{
                    fontSize: 16,
                    color: theme.colors.white,
                    fontWeight: "400",
                  }}
                >
                  Reps: {excercise.repsCount}
                </Text>
              </Animated.View>
            </View>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
};
