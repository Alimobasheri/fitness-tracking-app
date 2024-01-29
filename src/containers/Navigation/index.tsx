import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import { linking } from "../../constants/linking";
import { RootStackParamList } from "../../constants/navigation";
import { SCREENS } from "../../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { theme } = useTheme();
  const getScreenOptions = (screenName: string) => {
    switch (screenName) {
      case "Home":
        return {
          headerShown: false,
        };
      case "Session":
        return {
          headerStyle: {
            backgroundColor: theme.colors.primary,
            borderBottomWidth: 0,
          },
          headerTintColor: theme.colors.white,
          headerBackTitle: "",
          headerBackVisible: false,
        };
      default:
        return {};
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      >
        {SCREENS.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name as keyof RootStackParamList}
            component={screen.component}
            options={{ title: screen.title, ...getScreenOptions(screen.name) }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
