import { useTheme } from "@rneui/themed";
import { View, Platform } from "react-native";

export const ProfileScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    ></View>
  );
};
