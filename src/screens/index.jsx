import { FeedScreen } from "./FeedScreen";
import { HomeScreen } from "./HomeScreen";
import { ProfileScreen } from "./ProfileScreen";
import { SessionOverviewScreen } from "./SessionOverviewScreen";
import { WorkoutSessionScreeen } from "./WorkoutSessionScreen";
import { WorkoutsScreen } from "./WorkoutsScreen";

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
];

export const HOME_TAB_SCREENS = [
  {
    name: "Feed",
    title: "Welcome MirAli!",
    component: FeedScreen,
  },
  {
    name: "Workouts",
    title: "Workouts",
    component: WorkoutsScreen,
  },
  {
    name: "Profile",
    title: "Profile",
    component: ProfileScreen,
  },
];
