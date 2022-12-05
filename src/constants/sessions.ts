import { WorkoutSessionObject, WorkoutSessions } from "../types/workout";
import {
  ABS,
  BACK,
  BICEPS,
  CALFS,
  CHESTS,
  Glutes,
  LEGS,
  Shoulders,
} from "../types/body";
import {
  BACK_EXCERCISES,
  BICEPS_EXCERCISES,
  CHESTS_EXCERCISES,
  LEGS_EXCERCISES,
  SHOULDERS_EXCERCISES,
  TRICEPS_EXCERCISES,
} from "./excercises";
import ChestsAndBicepsImage from "../../assets/Sessions-images/chests-biceps.jpeg";
import AbsImage from "../../assets/Sessions-images/abs.webp";
import LegsAndBackImage from "../../assets/Sessions-images/legs-back.jpeg";
import ShouldrsTricepsImage from "../../assets/Sessions-images/shoulder-triceps.webp";

export const defaultChestAndBicepsSessions: WorkoutSessions = {
  restTime: 40,
  restFrequency: 1,
  excercises: [
    {
      name: "Chest Press & Chest Fly Combined",
      bodyPart: CHESTS,
      setsCount: 3,
      repsCount: 8,
      isSuperSet: true,
      superSetExcercises: [
        CHESTS_EXCERCISES["Dumbells Bench Chests Press"],
        CHESTS_EXCERCISES["TRX Chests Press"],
        CHESTS_EXCERCISES["Dumbells Bench Chests Flye"],
        CHESTS_EXCERCISES["TRX Chests Flye"],
      ],
    },
    {
      name: "Upper-Chests & Lower-Chests Combined",
      bodyPart: CHESTS,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 8,
      superSetExcercises: [
        CHESTS_EXCERCISES["Dumbells Incline Chest Press"],
        CHESTS_EXCERCISES["Dumbells Decline Chest Press"],
        CHESTS_EXCERCISES["Band Chest Row From Pull-Up Bar"],
        CHESTS_EXCERCISES["Band Lower Chest Crossover"],
      ],
    },
    {
      name: "Biceps Curls Combined",
      bodyPart: BICEPS,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 8,
      superSetExcercises: [
        BICEPS_EXCERCISES["Dumbells Biceps Curl"],
        BICEPS_EXCERCISES["Bands Biceps Curl"],
        BICEPS_EXCERCISES["TRX Biceps Curl"],
      ],
    },
    {
      name: "Biceps Hammer & Curls Combined",
      bodyPart: BICEPS,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 8,
      superSetExcercises: [
        BICEPS_EXCERCISES["Dumbells Hammer Biceps Curl"],
        BICEPS_EXCERCISES["TRX Hammer Biceps Curl"],
        BICEPS_EXCERCISES["Band Single Bicep Curl"],
      ],
    },
  ],
};

export const defaultLegsAndBackSessions: WorkoutSessions = {
  restTime: 40,
  restFrequency: 1,
  excercises: [
    {
      ...LEGS_EXCERCISES["Dumbell Loaded Squats"],
      setsCount: 3,
      repsCount: 10,
    },
    {
      ...LEGS_EXCERCISES["TRX Dumbell Loaded Step-Back Lunge"],
      setsCount: 3,
      repsCount: 12,
    },
    {
      name: "Glutes Excercises",
      bodyPart: [LEGS, Glutes],
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        LEGS_EXCERCISES["TRX Hamstring Curl"],
        LEGS_EXCERCISES["Dumbell Hip Thrusters"],
      ],
    },
    {
      name: "Calf Raise & Deadlift Combined",
      bodyPart: [LEGS, CALFS],
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        LEGS_EXCERCISES["TRX Standing Calf Raises"],
        LEGS_EXCERCISES["Dumbell Stiff-leg Deadlift"],
      ],
    },
    {
      name: "Power Pulls & Band Row Combined",
      bodyPart: BACK,
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        BACK_EXCERCISES["TRX Dumbell Power Pulls"],
        BACK_EXCERCISES["Band Single-hand Row from Pull-up Bar"],
      ],
    },
    {
      name: "Bar Pull-up & Dumbell Rows Combined",
      bodyPart: BACK,
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        BACK_EXCERCISES["Bar Pull Up"],
        BACK_EXCERCISES["Dumbell Rows"],
      ],
    },
    {
      name: "TRX & Dumbells Single-Hand Rows Combined",
      bodyPart: BACK,
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        BACK_EXCERCISES["TRX Single-Hand Row"],
        BACK_EXCERCISES["Dumbell Single-Hand Row"],
      ],
    },
  ],
};

export const defaultShouldersAndTricepsSession: WorkoutSessions = {
  restTime: 60,
  restFrequency: 1,
  excercises: [
    {
      ...SHOULDERS_EXCERCISES["Half-kneeling Archer Row"],
      setsCount: 3,
      repsCount: 8,
    },
    {
      name: "Shoulder Presses Combined",
      bodyPart: Shoulders,
      isSuperSet: true,
      setsCount: 4,
      repsCount: 8,
      superSetExcercises: [
        SHOULDERS_EXCERCISES["TRX Shoulders Press"],
        SHOULDERS_EXCERCISES["Dumbells Shoulders Press"],
        SHOULDERS_EXCERCISES["Band Shoulders Press"],
      ],
    },
    {
      name: "Shoulder Lateral Raises Combined",
      bodyPart: Shoulders,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 12,
      superSetExcercises: [
        SHOULDERS_EXCERCISES["TRX Single-Hand Lateral Raises"],
        SHOULDERS_EXCERCISES["Dumbells Lateral Raises"],
        SHOULDERS_EXCERCISES["Bands Lateral Raises"],
      ],
    },
    {
      name: "Bent Over Reverse Fly Combined",
      bodyPart: Shoulders,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 12,
      superSetExcercises: [
        SHOULDERS_EXCERCISES["Dumbells Bent Over Reverse Fly"],
        SHOULDERS_EXCERCISES["Bands Bent Over Reverse Fly"],
      ],
    },
    { ...SHOULDERS_EXCERCISES["Dumbells Shrugs"], setsCount: 4, repsCount: 20 },
    {
      name: "Triceps Press & Pushdown Combined",
      bodyPart: Shoulders,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 12,
      superSetExcercises: [
        TRICEPS_EXCERCISES["Dumbells Floor Press"],
        TRICEPS_EXCERCISES["TRX Triceps Press"],
        TRICEPS_EXCERCISES["Bands Triceps Single-hand Pushdown"],
      ],
    },
    {
      name: "Triceps Skullcrusher & Extensions Combined",
      bodyPart: Shoulders,
      isSuperSet: true,
      setsCount: 3,
      repsCount: 12,
      superSetExcercises: [
        TRICEPS_EXCERCISES["Skullcrushers"],
        TRICEPS_EXCERCISES["Dumbell Isolated Triceps Extension"],
        TRICEPS_EXCERCISES["Band Overhead Triceps Extension"],
      ],
    },
  ],
};

export const defaultHIITSession: WorkoutSessions = {
  restTime: 20,
  restFrequency: 1,
  excercises: [
    {
      name: "TRX Push-Up & Oblique Crunch",
      bodyPart: [CHESTS, ABS],
      setsCount: 2,
      isTimerBased: true,
      timerLimit: 60,
    },
    {
      name: "TRX Superman ABS",
      bodyPart: [ABS],
      setsCount: 2,
      isTimerBased: true,
      timerLimit: 60,
    },
    {
      name: "TRX Plank",
      bodyPart: ABS,
      setsCount: 2,
      isTimerBased: true,
      timerLimit: 60,
    },
    {
      name: "Pull-Up Bar Crunch",
      bodyPart: ABS,
      setsCount: 2,
      isTimerBased: true,
      timerLimit: 60,
    },
    {
      name: "TRX Mountain Climbers",
      bodyPart: ABS,
      setsCount: 2,
      isTimerBased: true,
      timerLimit: 60,
    },
  ],
};

export const DEFAULT_SESSIONS: WorkoutSessionObject[] = [
  {
    name: "Chest And Biceps",
    session: defaultChestAndBicepsSessions,
    sessionId: 1,
    imageSrc: ChestsAndBicepsImage,
  },
  {
    name: "Abs HIIT",
    session: defaultHIITSession,
    sessionId: 2,
    imageSrc: AbsImage,
  },
  {
    name: "Legs And Back",
    session: defaultLegsAndBackSessions,
    sessionId: 3,
    imageSrc: LegsAndBackImage,
  },
  {
    name: "Shoulders And Triceps",
    session: defaultShouldersAndTricepsSession,
    sessionId: 4,
    imageSrc: ShouldrsTricepsImage,
  },
];
