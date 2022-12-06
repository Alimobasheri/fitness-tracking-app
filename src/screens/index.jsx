import { HomeScreen } from "./HomeScreen";
import { SessionOverviewScreen } from "./SessionOverviewScreen";
import { SessionsListScreen } from "./SessionsListScreen";
import { WorkoutSessionScreeen } from "./WorkoutSessionScreen";

export const SCREENS = [
  {
    name: "Home",
    title: "Home",
    component: HomeScreen
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
    name: "SessionsList",
    title: "Sessions",
    component: SessionsListScreen,
  },
]