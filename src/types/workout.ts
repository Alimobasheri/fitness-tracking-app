import { Excercise } from "./excercise"

export interface WorkoutSessions {
    excercises: Excercise[],
    restTime?: number,
    restFrequency?: number
}