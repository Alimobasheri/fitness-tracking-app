import { FeedScreen } from "./FeedScreen";
import { ProfileScreen } from "./ProfileScreen";
import { WorkoutsAndPlansScreen } from "./WorkoutsAndPlansScreen";

export const HOME_TAB_SCREENS = [
  {
    name: "Feed",
    title: "Welcome MirAli!",
    component: FeedScreen,
  },
  {
    name: "WorkoutsAndPlans",
    title: "Workouts And Plans",
    component: WorkoutsAndPlansScreen,
  },
  {
    name: "Profile",
    title: "Profile",
    component: ProfileScreen,
  },
];
