import { BodyPart } from "./body";

export type ExcerciseInstructions = string[];

export interface Excercise {
  name: string;
  bodyPart?: BodyPart;
  setNumber?: number;
  isRest?: boolean;
  setsCount?: number;
  repsCount?: number;
  instructions?: ExcerciseInstructions;
  isSuperSet?: boolean;
  superSetExcercises?: Excercise[];
  imageSrc?: any;
}
