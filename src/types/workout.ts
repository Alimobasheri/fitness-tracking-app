import { Excercise } from "./excercise";

export interface WorkoutSessions {
  excercises: Excercise[];
  restTime?: number;
  restFrequency?: number;
}

export interface WorkoutSessionObject {
  name: string;
  session: WorkoutSessions;
  sessionId: number;
  imageSrc?: any;
}
