import { Excercise } from "../types/excercise";
import { BICEPS, CHESTS } from "../types/body";
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
