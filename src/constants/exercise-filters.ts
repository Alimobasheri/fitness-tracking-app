export const EXERCISE_TYPES = {
  CARDIO: "cardio",
  OLYMPIC_WEIGHTLIFTING: "olympic_weightlifting",
  PLYOMETRICS: "plyometrics",
  POWERLIFTING: "powerlifting",
  STRENGTH: "strength",
  STRETCHING: "stretching",
  STRONGMAN: "strongman",
};

export const EXERCISE_EQUIPMENTS = {
  BODY_ONLY: "body_only",
  MACHINE: "machine",
  OTHER: "other",
  NONE: "none",
  BARBELL: "barbell",
  DUMBBELL: "dumbbell",
  MEDICINE_BALL: "medicine_ball",
  EXERCISE_BALL: "exercise_ball",
  KETTLEBELLS: "kettlebells",
  BANDS: "bands",
  CABLE: "cable",
  "E-Z_CURL_BAR": "e-z_curl_bar",
  FOAM_ROLL: "foam_roll",
};

export const EXERCISE_MUSCLES = {
  QUADRICEPS: "quadriceps",
  MIDDLE_BACK: "middle_back",
  HAMSTRINGS: "hamstrings",
  SHOULDERS: "shoulders",
  CHEST: "chest",
  CALVES: "calves",
  GLUTES: "glutes",
  ABDOMINALS: "abdominals",
  TRAPS: "traps",
  TRICEPS: "triceps",
  LATS: "lats",
  ADDUCTORS: "adductors",
  LOWER_BACK: "lower_back",
  FOREARMS: "forearms",
  BICEPS: "biceps",
  NECK: "neck",
};

export const EXERCISE_DIFFICULTIES = {
  INTERMEDIATE: "intermediate",
  BEGINNER: "beginner",
  EXPERT: "expert",
};

export const FILTER_SCREEN_NAMES_TO_OPTIONS = {
  "filter-types": EXERCISE_TYPES,
  "filter-difficulties": EXERCISE_DIFFICULTIES,
  "filter-equipments": EXERCISE_EQUIPMENTS,
  "filter-muscles": EXERCISE_MUSCLES,
};
