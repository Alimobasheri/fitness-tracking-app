import { WorkoutSessions } from "../types/workout";
import { CHESTS } from "../types/body";
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
                CHESTS_EXCERCISES["Dumbells Bench Chests Flye"],
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
}