import {useMemo, useState} from "react"
import { Excercise } from "../../../types/excercise"
import { WorkoutSessions } from "../../../types/workout"


export const useWorkoutSteps = ({excercises, restTime, restFrequency=1}: WorkoutSessions) => {
  const [currentExcerciseIndex, setCurrentExcerciseIndex] = useState<number>(0);

  const multiplyArray = (array: any[], num: number=1, callbackFn: (exc: Excercise[], i: number) => Excercise[]) => {
    let newArr: any[] = []
    for(let i: number = 0; i < num - 1; i++) {
      newArr = newArr.concat(callbackFn(array, i))
    }
    return newArr
  }
  const workoutSteps = useMemo(() => {
    let steps: Excercise[] = [];
    excercises.forEach((exc, index) => {
      let excSteps: Excercise[] = []
      if(exc.isSuperSet) {
        exc.superSetExcercises.forEach((superExc) => {
          excSteps.push({...superExc, repsCount: exc.repsCount, setsCount: exc.setsCount})
        })
      } else {
        excSteps.push(exc)
      }
      let setsCount: number = exc.setsCount | 1
      excSteps = multiplyArray(excSteps, setsCount, (excs, i) => {
        return excs.map(ex => ({...ex, setNumber: i+1}))
      })
      steps = steps.concat(excSteps)
    })
    return steps
  }, [JSON.stringify(excercises)])
  const numberOfTotalExcercises: number = useMemo(
    () => workoutSteps.length,
    [workoutSteps.length]
  );
  const numberOfExcercisesLeft: number = useMemo(() => {
    return numberOfTotalExcercises - currentExcerciseIndex;
  }, [currentExcerciseIndex, numberOfTotalExcercises]);

  const gotoNextStep = () => setCurrentExcerciseIndex(currentExcerciseIndex + 1)
  return {
    currentExcerciseIndex,
    workoutSteps,
    numberOfTotalExcercises,
    numberOfExcercisesLeft,
    gotoNextStep
  }
}