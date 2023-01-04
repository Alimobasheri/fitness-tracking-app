import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text, useTheme } from "@rneui/themed";
import { Platform } from "react-native";
import { HOME_TAB_SCREENS } from "..";

const Tab = createBottomTabNavigator();

export const HomeScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const tabBarIcon = (tabRoute, { focused, color, size }) => {
    switch (tabRoute.name) {
      case "Feed":
        return <Icon name="dumbbell" type="font-awesome-5" color={color} />;
      case "Profile":
        return <Icon name="user" type="font-awesome-5" color={color} />;
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
        headerTitleAlign: "left",
        headerTitle(props) {
          return (
            <Text
              h2
              h2Style={{
                width: Platform.OS === "web" ? "100%" : "90%",
                lineHeight: 40,
                fontWeight: "200",
                ...(Platform.OS === "web" ? { height: 60 } : {}),
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {props.children}
            </Text>
          );
        },
      })}
    >
      {HOME_TAB_SCREENS.map((screen) => (
        <Tab.Screen
          key={screen.name}
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
