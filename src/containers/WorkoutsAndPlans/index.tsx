import { Button, Card, Icon, Text, useTheme } from "@rneui/themed";
import AnimatedLottieView from "lottie-react-native";
import { FC } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WorkoutLottie from "../../../assets/78268-workout.json";
import DumbellOutline from "../../components/SVGS/DumbellOutlineSvg";
import IndoorBikeSvg from "../../components/SVGS/IndoorBikeSvg";
import PersonalTrainerSvg from "../../components/SVGS/PersonalTrainer";
import AnimateBycicleLottie from "../../../assets/24249-girl-on-the-bicycle.json";
import AnimateGymLottie from "../../../assets/133714-arms-workout-gym.json";
import AnimateCoachLottie from "../../../assets/81327-coch-cencept-animation.json";
import LottieView from "lottie-react-native";

export const WorkoutsAndPlans = ({ navigation }) => {
  const { theme } = useTheme();
  const navigateToExercisesList = () => navigation.navigate("ExercisesList");
  const cardContainerStyle = StyleSheet.create({
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 48,
    margin: 24,
    borderRadius: 16,
    maxWidth: 300,
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
  });
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 24,
      }}
    >
      <View
        style={{
          paddingHorizontal: 24,
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            lineHeight: 22,
            fontSize: 16,
            fontWeight: "200",
          }}
          numberOfLines={4}
        >
          Start finding your favorite workouts, or plan your future exercises!
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <TouchableOpacity onPress={navigateToExercisesList} activeOpacity={0.8}> */}
        <Card
          containerStyle={cardContainerStyle}
          wrapperStyle={{ borderWidth: 0 }}
        >
          {/* <IndoorBikeSvg width={200} height={200} /> */}
          <LottieView
            autoPlay
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "transparent",
            }}
            source={AnimateGymLottie}
          />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card.Title
              style={{
                color: theme.colors.black,
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: 24,
              }}
            >
              All Excercises
            </Card.Title>
            <Text
              style={{
                color: theme.colors.grey0,
                fontWeight: "200",
                lineHeight: 18,
                marginBottom: 6,
              }}
            >
              Browse, Add, Edit or Remove
            </Text>
          </View>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <Icon type="ionicon" name="barbell" size={18} />
              <Text
                style={{
                  color: theme.colors.grey0,
                  fontWeight: "600",
                  lineHeight: 18,
                  marginLeft: 6,
                }}
              >
                Over 3000 Workouts
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <Icon type="material-community" name="format-columns" size={18} />
              <Text
                style={{
                  color: theme.colors.grey0,
                  fontWeight: "600",
                  lineHeight: 18,
                  marginLeft: 6,
                }}
              >
                Different Types & Equipments
              </Text>
            </View>
          </View>
          <Button
            style={{
              marginTop: 24,
            }}
            buttonStyle={{
              borderRadius: 7,
            }}
            onPress={navigateToExercisesList}
            activeOpacity={0.8}
          >
            Open Exercises
          </Button>
        </Card>
        {/* </TouchableOpacity> */}
        <Card containerStyle={cardContainerStyle}>
          {/* <PersonalTrainerSvg width={200} height={200} /> */}
          <LottieView
            autoPlay
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "transparent",
            }}
            source={AnimateCoachLottie}
          />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Card.Title
              style={{
                color: theme.colors.black,
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: 24,
              }}
            >
              Workout Plans
            </Card.Title>
            <Text
              style={{
                color: theme.colors.grey0,
                fontWeight: "200",
                lineHeight: 18,
                marginBottom: 6,
              }}
            >
              Review, Create or Start
            </Text>
          </View>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <Icon
                type="material-community"
                name="text-box-check-outline"
                size={18}
              />
              <Text
                style={{
                  color: theme.colors.grey0,
                  fontWeight: "600",
                  lineHeight: 18,
                  marginLeft: 6,
                }}
              >
                4 Default Sessions
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <Icon type="feather" name="dollar-sign" size={18} />
              <Text
                style={{
                  color: theme.colors.grey0,
                  fontWeight: "600",
                  lineHeight: 18,
                }}
              >
                Advanced Premium Plans Available
              </Text>
            </View>
          </View>
          <Button
            style={{
              marginTop: 24,
            }}
            buttonStyle={{
              borderRadius: 7,
            }}
            // onPress={navigateToExercisesList}
            activeOpacity={0.8}
          >
            Open Plans
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
};
