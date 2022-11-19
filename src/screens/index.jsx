import { SessionsListScreen } from "./SessionsListScreen";
import { WorkoutSessionScreeen } from "./WorkoutSessionScreen";

export const SCREENS = [
  {
    name: "SessionsList",
    title: "Workout Sessions",
    component: SessionsListScreen,
  },
  {
    name: "Session",
    component: WorkoutSessionScreeen,
  },
];
