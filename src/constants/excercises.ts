import { Excercise } from "../types/excercise";
import {CHESTS} from "../types/body"

interface IExcerciseList {
    [key: string]: Excercise
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
            "Repeat."
        ],
        isSuperSet: false
    },
    "TRX Chests Press": {
        name: "TRX Chests Press",
        bodyPart: CHESTS,
        instructions: [
            "Take each TRX strap in one hand.",
            "Resting on your hands push your body forward.",
            "Keep a few seconds.",
            "Push your body back.",
            "Repeat."
        ],
        isSuperSet: false
    },
    "Dumbells Bench Chests Flye": {
        name: "Dumbells Bench Chests Flye",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    },
    "TRX Chests Flye": {
        name: "TRX Chests Flye",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    },
    "Dumbells Incline Chest Press": {
        name: "Dumbells Incline Chest Press",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    },
    "Dumbells Decline Chest Press": {
        name: "Dumbells Decline Chest Press",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    },
    "Band Chest Row From Pull-Up Bar": {
        name: "Band Chest Row From Pull-Up Bar",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    },
    "Band Lower Chest Crossover": {
        name: "Band Lower Chest Crossover",
        bodyPart: CHESTS,
        instructions: [
            "Repeat."
        ],
        isSuperSet: false
    }
}


export const BICEPS_EXCERCISES: IExcerciseList = {
    
}