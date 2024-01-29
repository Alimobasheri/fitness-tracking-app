import { useTheme } from "@rneui/themed";
import { View } from "react-native";
import { WorkoutsAndPlans } from "../../containers/WorkoutsAndPlans";

export const WorkoutsAndPlansScreen = ({ route, navigation }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <WorkoutsAndPlans navigation={navigation} />
    </View>
  );
};
