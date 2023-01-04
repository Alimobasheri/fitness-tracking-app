import { Icon, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const WorkoutsScreen = ({ route, navigation }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      <View
        style={{
          padding: 8,
          backgroundColor: theme.colors.grey5,
          margin: 12,
          borderRadius: 4,
        }}
      >
        <View style={{
          height: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}>
          <TouchableOpacity>
          <Icon
              size={15}
              name={"close"}
              type={"ant-design"}
              color={theme.colors.grey1}
            /> 
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <View style={{ marginRight: 8 }}>
            <Icon
              size={15}
              name={"info-circle"}
              type={"font-awesome-5"}
              color={theme.colors.grey1}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={3}
              adjustsFontSizeToFit
              h4
              h4Style={{
                color: theme.colors.grey1,
                fontWeight: "100",
                fontSize: 12,
              }}
            >
              Here you can see a list of all workouts and plans available in the
              app. You can edit them or add new ones. Tap on each of them to
              overview them and learn more.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
