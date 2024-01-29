export const SCREEN_NAMES = {
  HOME: "Home",
  FEED: "Feed",
  WORKOUTS_AND_PLANS: "WorkoutsAndPlans",
  EXERCISES_LIST: "ExercisesList",
  EXERCISE: "Exercise",
  PROFILE: "Profile",
  SESSION_OVERVIEW: "SessionOverview",
  SESSION: "Session",
};

export type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  WORKOUTS_AND_PLANS: undefined;
  Exercise: { exerciseId: number };
  ExercisesList: undefined;
  SessionOverview: { sessionId: number | string };
  Session: { SessionId: number | string };
  Profile: undefined;
};
