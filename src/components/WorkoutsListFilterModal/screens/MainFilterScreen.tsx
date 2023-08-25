import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Button, Icon, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectTags } from "../components/selectTags";

export const MainFilterScreen = ({ route, navigation }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 24,
          flex: 1,
        }}
      >
        <View
          style={{
            marginBottom: 24,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Text
            h4
            h4Style={{
              fontWeight: "400",
              marginBottom: 6,
            }}
          >
            Filter Exercises
          </Text>
          <Text
            style={{
              color: theme.colors.grey0,
              fontWeight: "200",
            }}
          >
            Select from a large variation of exercises based on what equipments
            or level of difficulty they require or what muscle groups they
            target.
          </Text>
        </View>
        <BottomSheetFlatList
          contentContainerStyle={{
            borderWidth: 0,
            padding: 6,
          }}
          data={[
            {
              title: "excercise type",
              screen: "filter-types",
            },
            {
              title: "equipments",
              screen: "filter-equipments",
            },
            {
              title: "muscle groups",
              screen: "filter-muscles",
            },
            {
              title: "difficulty",
              screen: "filter-difficulties",
            },
          ]}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                borderBottomWidth: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.screen);
                }}
                style={{
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: 12,
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ textTransform: "capitalize" }}>
                    {item.title}
                  </Text>
                  <Icon type="entypo" name="chevron-small-right" size={20} />
                </View>
                <View
                  style={{
                    marginTop: 6,
                  }}
                >
                  <SelectTags name={item.screen} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={() => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="clear"
                  style={{
                    marginTop: 24,
                  }}
                  buttonStyle={{
                    borderRadius: 7,
                    borderColor: theme.colors.error,
                  }}
                  activeOpacity={0.8}
                  titleStyle={{ color: theme.colors.error }}
                >
                  Clear Filters
                </Button>
              </View>
            );
          }}
          keyExtractor={(item) => item.screen}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
