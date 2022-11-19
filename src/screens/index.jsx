import { SessionOverviewScreen } from "./SessionOverviewScreen";
import { SessionsListScreen } from "./SessionsListScreen";
import { WorkoutSessionScreeen } from "./WorkoutSessionScreen";

export const SCREENS = [
  {
    name: "SessionsList",
    title: "Workout Sessions",
    component: SessionsListScreen,
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
