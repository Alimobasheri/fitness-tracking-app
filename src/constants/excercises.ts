import { Excercise } from "../types/excercise";
import {
  BACK,
  BICEPS,
  CALFS,
  CHESTS,
  Glutes,
  LEGS,
  Shoulders,
  TRICEPS,
} from "../types/body";
import DumbellsBenchChestsPressImage from "../../assets/excercise-images/dumbell-chest-press.mov.gif";
import TRXChestsPress from "../../assets/excercise-images/TRX-Chest-Press.gif";
import DumbellsBenchChestsFlye from "../../assets/excercise-images/dumbells-chests-fly.gif";
import TRXChestsFlye from "../../assets/excercise-images/trx-chest-fly.gif";
import DumbellsInclineChestPress from "../../assets/excercise-images/dumbells-incline-chest-press.gif";
import DumbellsDeclineChestPress from "../../assets/excercise-images/dumbells-decline-bench-press.gif";
import BandChestRowFromPullUpBar from "../../assets/excercise-images/band-standing-row.gif";
import BandLowerChestCrossover from "../../assets/excercise-images/cable-crossover.gif";
import DumbellsBicepsCurl from "../../assets/excercise-images/dumbells-biceps-curl.gif";
import BandsBicepsCurl from "../../assets/excercise-images/band-biceps-curl.gif";
import TRXBicepsCurl from "../../assets/excercise-images/trx-biceps-curl.gif";
import DumbellsHammerBicepsCurl from "../../assets/excercise-images/dumbells-hammer-biceps-curl.gif";
import CableSingleBicepCurl from "../../assets/excercise-images/cable-single-arm-bicep-curl.gif";

interface IExcerciseList {
  [key: string]: Excercise;
}

export const CHESTS_EXCERCISES: IExcerciseList = {
  "Dumbells Bench Chests Press": {
    name: "Dumbells Bench Chests Press",
    bodyPart: CHESTS,
    instructions: [
      "Lay on bench.",
      "Keep each dumbell in one hand.",
      "Push them as far as your hands get straight.",
      "keep a few seconds.",
      "Bring your hands down.",
      "Repeat.",
    ],
    isSuperSet: false,
    imageSrc: DumbellsBenchChestsPressImage,
  },
  "TRX Chests Press": {
    name: "TRX Chests Press",
    bodyPart: CHESTS,
    instructions: [
      "Take each TRX strap in one hand.",
      "Resting on your hands push your body forward.",
      "Keep a few seconds.",
      "Push your body back.",
      "Repeat.",
    ],
    isSuperSet: false,
    imageSrc: TRXChestsPress,
  },
  "Dumbells Bench Chests Flye": {
    name: "Dumbells Bench Chests Flye",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: DumbellsBenchChestsFlye,
  },
  "TRX Chests Flye": {
    name: "TRX Chests Flye",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: TRXChestsFlye,
  },
  "Dumbells Incline Chest Press": {
    name: "Dumbells Incline Chest Press",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: DumbellsInclineChestPress,
  },
  "Dumbells Decline Chest Press": {
    name: "Dumbells Decline Chest Press",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: DumbellsDeclineChestPress,
  },
  "Band Chest Row From Pull-Up Bar": {
    name: "Band Chest Row From Pull-Up Bar",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: BandChestRowFromPullUpBar,
  },
  "Band Lower Chest Crossover": {
    name: "Band Lower Chest Crossover",
    bodyPart: CHESTS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: BandLowerChestCrossover,
  },
};

export const BICEPS_EXCERCISES: IExcerciseList = {
  "Dumbells Biceps Curl": {
    name: "Dumbells Biceps Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: DumbellsBicepsCurl,
  },
  "Bands Biceps Curl": {
    name: "Bands Biceps Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: BandsBicepsCurl,
  },
  "TRX Biceps Curl": {
    name: "TRX Biceps Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: TRXBicepsCurl,
  },
  "Dumbells Hammer Biceps Curl": {
    name: "Dumbells Hammer Biceps Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: DumbellsHammerBicepsCurl,
  },
  "TRX Hammer Biceps Curl": {
    name: "TRX Hammer Biceps Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Band Single Bicep Curl": {
    name: "Band Single Bicep Curl",
    bodyPart: BICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
    imageSrc: CableSingleBicepCurl,
  },
};

export const LEGS_EXCERCISES: IExcerciseList = {
  "TRX Jump Squats": {
    name: "TRX Jump Squats",
    bodyPart: LEGS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Loaded Squats": {
    name: "Dumbell Loaded Squats",
    bodyPart: LEGS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Dumbell Loaded Step-Back Lunge": {
    name: "TRX Dumbell Loaded Step-Back Lunge",
    bodyPart: LEGS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Hamstring Curl": {
    name: "TRX Hamstring Curl",
    bodyPart: [LEGS, Glutes],
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Hip Thrusters": {
    name: "Dumbell Hip Thrusters",
    bodyPart: [LEGS, Glutes],
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Standing Calf Raises": {
    name: "TRX Standing Calf Raises",
    bodyPart: [LEGS, CALFS],
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Stiff-leg Deadlift": {
    name: "Dumbell Stiff-leg Deadlift",
    bodyPart: LEGS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
};

export const BACK_EXCERCISES: IExcerciseList = {
  "TRX Dumbell Power Pulls": {
    name: "TRX Dumbell Power Pulls",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Band Single-hand Row from Pull-up Bar": {
    name: "Band Single-hand Row from Pull-up Bar",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Bar Pull Up": {
    name: "Bar Pull Up",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Single-Hand Row": {
    name: "TRX Single-Hand Row",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Single-Hand Row": {
    name: "Dumbell Single-Hand Row",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Rows": {
    name: "Dumbell Rows",
    bodyPart: BACK,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
};

export const SHOULDERS_EXCERCISES: IExcerciseList = {
  "TRX Shoulders Press": {
    name: "TRX Shoulders Press",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbells Shoulders Press": {
    name: "Dumbells Shoulders Press",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Band Shoulders Press": {
    name: "Band Shoulders Press",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbells Shoulders Front Raises": {
    name: "Dumbells Shoulders Front Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Shoulders Front Raises": {
    name: "TRX Shoulders Front Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Band Shoulders Front Raises": {
    name: "Band Shoulders Front Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbells Bent Over Reverse Fly": {
    name: "Dumbells Bent Over Reverse Fly",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Bands Bent Over Reverse Fly": {
    name: "Bands Bent Over Reverse Fly",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Single-Hand Lateral Raises": {
    name: "TRX Single-Hand Lateral Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbells Lateral Raises": {
    name: "Dumbells Lateral Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Bands Lateral Raises": {
    name: "Bands Lateral Raises",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Half-kneeling Archer Row": {
    name: "Half-kneeling Archer Row",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbells Shrugs": {
    name: "Dumbells Shrugs",
    bodyPart: Shoulders,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
};

export const TRICEPS_EXCERCISES: IExcerciseList = {
  "Dumbells Floor Press": {
    name: "Dumbells Floor Press",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Bands Triceps Single-hand Pushdown": {
    name: "Bands Triceps Single-hand Pushdown",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Dumbell Isolated Triceps Extension": {
    name: "Dumbell Isolated Triceps Extension",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  Skullcrushers: {
    name: "Skullcrushers",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "TRX Triceps Press": {
    name: "TRX Triceps Press",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
  "Band Overhead Triceps Extension": {
    name: "Band Overhead Triceps Extension",
    bodyPart: TRICEPS,
    instructions: ["Repeat."],
    isSuperSet: false,
  },
};
