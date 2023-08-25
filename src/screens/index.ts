import { SCREEN_NAMES } from "../constants/navigation";
import { ExerciseScreen } from "./Exercise";
import { FeedScreen } from "./FeedScreen";
import { HomeScreen } from "./HomeScreen";
import { ProfileScreen } from "./ProfileScreen";
import { SessionOverviewScreen } from "./SessionOverviewScreen";
import { WorkoutSessionScreeen } from "./WorkoutSessionScreen";
import { WorkoutsAndPlansScreen } from "./WorkoutsAndPlansScreen";
import ExercisesListScreen from "./ExercisesList";

export const SCREENS = [
  {
    name: "Home",
    title: "Home",
    component: HomeScreen,
  },
  {
    name: "SessionOverview",
    title: "Session Overview",
    component: SessionOverviewScreen,
  },
  {
    name: "Session",
    component: WorkoutSessionScreeen,
  },
  {
    name: SCREEN_NAMES.EXERCISE,
    component: ExerciseScreen,
  },
  {
    name: SCREEN_NAMES.EXERCISES_LIST,
    title: "All Exercises",
    component: ExercisesListScreen,
  },
];
