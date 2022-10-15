import { WorkoutSessions } from "../types/workout";
import { CHESTS } from "../types/body";
import { CHESTS_EXCERCISES } from "./excercises";

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
        }
    ]
}