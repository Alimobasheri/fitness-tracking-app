import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, useTheme } from "@rneui/themed";
import { HOME_TAB_SCREENS } from "..";

const Tab = createBottomTabNavigator();

export const HomeScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const tabBarIcon = (tabRoute, { focused, color, size }) => {
    if (tabRoute.name === "SessionsList") {
      return <Icon name="dumbbell" type="font-awesome-5" color={color} />;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon(route, { focused, color, size }),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey2,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerShadowVisible: false,
      })}
    >
      {HOME_TAB_SCREENS.map((screen) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
