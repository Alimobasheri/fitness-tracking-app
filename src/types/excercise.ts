import { BodyPart } from "./body";

export type ExcerciseInstructions = string[];

export interface Excercise {
  name: string;
  bodyPart?: BodyPart[] | BodyPart;
  setNumber?: number;
  isRest?: boolean;
  setsCount?: number;
  repsCount?: number;
  isTimerBased?: boolean;
  timerLimit?: number;
  instructions?: ExcerciseInstructions;
  isSuperSet?: boolean;
  superSetExcercises?: Excercise[];
  imageSrc?: any;
}
