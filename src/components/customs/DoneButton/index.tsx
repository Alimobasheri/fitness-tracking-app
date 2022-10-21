import { Button, Icon, useTheme } from "@rneui/themed";
import { FC, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styles from "./styles";

interface DoneButtonProps {
  onPress: () => void;
}

export const DoneButton: FC<DoneButtonProps> = ({
  onPress,
}: DoneButtonProps) => {
  const { theme } = useTheme();
  const buttonWidth = useSharedValue(0);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [closedButtonWidth, setClosedButtonWidth] = useState(0);
  const [showCheckmark, setShowCheckmark] = useState<boolean>(false);
  const [state, setState] = useState<string>("INITIAL");
  const onLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }: LayoutChangeEvent) => {
    if (state === "INITIAL") {
      buttonWidth.value = width;
      setState("NOT_INITIAL");
      setInitialWidth(width);
      setInitialHeight(height);
      setClosedButtonWidth(height);
    }
  };

  const returnToInitialState = () => {
    "worklet";
    buttonWidth.value = withTiming(initialWidth, {
      duration: 300,
      easing: Easing.bezier(0.76, 0, 0.24, 1),
    });
    setShowCheckmark(false);
  };

  const wrapperStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      buttonWidth.value,
      [initialWidth, closedButtonWidth],
      [7, initialHeight]
    );
    const backgroundColor = interpolateColor(
      buttonWidth.value,
      [initialWidth, closedButtonWidth],
      [theme.colors.primary, theme.colors.white]
    );
    return {
      width: buttonWidth.value > 0 ? buttonWidth.value : 200,
      justifyContent: "center",
      borderRadius,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      marginHorizontal: 36,
      overflow: "hidden",
      backgroundColor,
      position: "relative",
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      buttonWidth.value,
      [initialWidth, closedButtonWidth],
      [theme.colors.white, theme.colors.primary]
    );
    const opacity = interpolate(
      buttonWidth.value,
      [initialWidth, closedButtonWidth],
      [1, 0]
    );
    return {
      fontSize: 16,
      color,
      opacity,
    };
  });

  const checkmarkStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      buttonWidth.value,
      [initialWidth, closedButtonWidth],
      [0.5, 1]
    );
    return {
      opacity,
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 40,
      height: 40,
      transform: [{ translateX: -20 }, { translateY: -20 }],
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    };
  });

  const showsCheckmark = () => setShowCheckmark(true);

  const handlePress = () => {
    "worklet";
    buttonWidth.value = withTiming(closedButtonWidth, {
      duration: 300,
      easing: Easing.bezier(0.76, 0, 0.24, 1),
    });
    setTimeout(showsCheckmark, 200);
    setTimeout(onPress, 500);
    setTimeout(returnToInitialState, 600);
  };
  return (
    <Animated.View
      onLayout={onLayout}
      style={[wrapperStyle, { marginHorizontal: 36 }]}
    >
      <Button
        type={"solid"}
        containerStyle={styles.doneButtonContainerStyle}
        buttonStyle={styles.doneButtonStyle}
        onPress={handlePress}
        color={"transparent"}
        titleStyle={{ color: theme.colors.primary }}
      >
        <Animated.Text style={textStyle} numberOfLines={1} adjustsFontSizeToFit>
          Done
        </Animated.Text>
      </Button>
      {showCheckmark && (
        <Animated.View style={checkmarkStyle}>
          <Icon
            name={"checkmark"}
            type={"ionicon"}
            size={30}
            color={theme.colors.primary}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
};