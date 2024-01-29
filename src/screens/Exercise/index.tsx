import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList, SCREEN_NAMES } from "../../constants/navigation";
import SessionOverview from "../../containers/SessionOverview";
import EXERCISES from "../../constants/exercises.json";
import useGetSession from "../../core/hooks/useGetSessions";
import { WorkoutSessionObject } from "../../types/workout";
import { Button, Card, Icon, Text, useTheme } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import LottieView from "lottie-react-native";
import AnimateExercise from "../../../assets/78268-workout.json";

type ExerciseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Exercise"
>;

export const ExerciseScreen = ({ route, navigation }: ExerciseScreenProps) => {
  const { exerciseId } = route.params;
  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const insets = useSafeAreaInsets();
  const exercise = EXERCISES.exercises.find((item) => item.id === exerciseId);
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: Platform.OS === "android" ? insets.bottom + 6 : 0,
        maxHeight: "100%",
        height: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 36,
        }}
      >
        <Card
          containerStyle={{
            margin: 0,
            borderRadius: 12,
            padding: 24,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <LottieView
            autoPlay
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "transparent",
            }}
            source={AnimateExercise}
          />
          <Text
            h4
            h4Style={{
              color: theme.colors.grey3,
              fontSize: 12,
              marginBottom: 12,
              marginTop: 24,
            }}
          >
            Name
          </Text>
          <Text
            h2
            h2Style={{
              marginBottom: 24,
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {exercise.name}
          </Text>
          <Card.Divider />
          <Text
            h4
            h4Style={{
              color: theme.colors.grey3,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            Summary
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type="material"
                name="sports-handball"
                color={theme.colors.grey3}
                size={14}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                h4
                h4Style={{
                  color: theme.colors.grey3,
                  fontSize: 14,
                  marginRight: 20,
                  marginLeft: 6,
                  fontWeight: "600",
                  alignItems: "center",
                }}
              >
                Type{" "}
              </Text>
            </View>
            <Text
              h4
              h4Style={{
                fontWeight: "200",
                textTransform: "capitalize",
                fontSize: 20,
              }}
              adjustsFontSizeToFit
            >
              {exercise.type}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type="material-community"
                name="arm-flex"
                color={theme.colors.grey3}
                size={14}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                h4
                h4Style={{
                  color: theme.colors.grey3,
                  fontSize: 14,
                  marginLeft: 6,
                  marginRight: 20,
                  fontWeight: "600",
                }}
              >
                Muscle{" "}
              </Text>
            </View>
            <Text
              h4
              h4Style={{
                fontWeight: "200",
                textTransform: "capitalize",
                fontSize: 20,
              }}
              adjustsFontSizeToFit
            >
              {exercise.muscle}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type="material"
                name="sports-mma"
                color={theme.colors.grey3}
                size={14}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                h4
                h4Style={{
                  color: theme.colors.grey3,
                  fontSize: 14,
                  marginRight: 20,
                  marginLeft: 6,
                  fontWeight: "600",
                  alignItems: "center",
                }}
              >
                Equipment{" "}
              </Text>
            </View>
            <Text
              h4
              h4Style={{
                fontWeight: "200",
                textTransform: "capitalize",
                fontSize: 20,
              }}
              adjustsFontSizeToFit
            >
              {exercise.equipment}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type="material"
                name="priority-high"
                color={theme.colors.grey3}
                size={14}
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text
                h4
                h4Style={{
                  color: theme.colors.grey3,
                  fontSize: 14,
                  marginRight: 20,
                  marginLeft: 6,
                  fontWeight: "600",
                  alignItems: "center",
                }}
              >
                Difficulty{" "}
              </Text>
            </View>
            <Text
              h4
              h4Style={{
                fontWeight: "200",
                textTransform: "capitalize",
                fontSize: 20,
              }}
              adjustsFontSizeToFit
            >
              {exercise.difficulty}
            </Text>
          </View>
          <Card.Divider style={{ marginTop: 12 }} />
          <Text
            h4
            h4Style={{
              color: theme.colors.grey3,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            Actions
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 0,
            }}
          >
            <Button
              type="clear"
              icon={
                <Icon
                  type="font-awesome"
                  name={isFavorite ? "heart" : "heart-o"}
                  color={theme.colors.error}
                  size={20}
                />
              }
              onPress={() => setIsFavorite(!isFavorite)}
            />
            <Button
              type="clear"
              icon={
                <Icon
                  type="ant-design"
                  name="plus"
                  color={theme.colors.success}
                  size={20}
                />
              }
            />
            <Button
              type="clear"
              icon={
                <Icon
                  type="material"
                  name="edit"
                  color={theme.colors.primary}
                  size={20}
                />
              }
            />
          </View>
        </Card>
        <Card
          containerStyle={{
            margin: 0,
            marginTop: 36,
            borderRadius: 12,
            padding: 24,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Text
            h4
            h4Style={{
              color: theme.colors.grey3,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            Instructions
          </Text>
          <Text
            style={{
              fontWeight: "300",
              lineHeight: 24,
              fontSize: 18,
            }}
          >
            {exercise.instructions}
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};
