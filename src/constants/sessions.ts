import { WorkoutSessionObject, WorkoutSessions } from "../types/workout";
import { ABS, CHESTS } from "../types/body";
import { BICEPS_EXCERCISES, CHESTS_EXCERCISES } from "./excercises";

export const defaultChestAndBicepsSessions: WorkoutSessions = {
  restTime: 40,
  restFrequency: 1,
  excercises: [
    {
      name: "Chest Press & Chest Fly Combined",
      bodyPart: CHESTS,
      setsCount: 2,
      repsCount: 12,
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
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        CHESTS_EXCERCISES["Dumbells Incline Chest Press"],
        CHESTS_EXCERCISES["Dumbells Decline Chest Press"],
        CHESTS_EXCERCISES["Band Chest Row From Pull-Up Bar"],
        CHESTS_EXCERCISES["Band Lower Chest Crossover"],
      ],
    },
    {
      name: "Biceps Curls Combined",
      bodyPart: CHESTS,
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        BICEPS_EXCERCISES["Dumbells Biceps Curl"],
        BICEPS_EXCERCISES["Bands Biceps Curl"],
        BICEPS_EXCERCISES["TRX Biceps Curl"],
      ],
    },
    {
      name: "Biceps Hammer & Curls Combined",
      bodyPart: CHESTS,
      isSuperSet: true,
      setsCount: 2,
      repsCount: 12,
      superSetExcercises: [
        BICEPS_EXCERCISES["Dumbells Hammer Biceps Curl"],
        BICEPS_EXCERCISES["TRX Hammer Biceps Curl"],
        BICEPS_EXCERCISES["Band Single Bicep Curl"],
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
    name: "Chest And Biceps Session",
    session: defaultChestAndBicepsSessions,
    sessionId: 1,
  },
  {
    name: "Abs HIIT Session",
    session: defaultHIITSession,
    sessionId: 2,
  },
];
