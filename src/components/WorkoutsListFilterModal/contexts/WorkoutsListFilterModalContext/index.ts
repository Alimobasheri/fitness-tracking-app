import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { createContext, Ref, RefAttributes } from "react";

interface IWorkoutsListFilterModalContext {
  modalRef: undefined | RefAttributes<BottomSheetModalMethods>;
  typesFilter: string[];
  setTypesFilter: (equipments: string[]) => void;
  equipmentFilter: string[];
  setEquipmentFilter: (equipments: string[]) => void;
  muscleGroupFilter: string[];
  setMuscleGroupFilter: (muscles: string[]) => void;
  difficultiesFilter: string[];
  setDifficultiesFilter: (muscles: string[]) => void;
}

export const WorkoutsListFilterModalContext = createContext<
  IWorkoutsListFilterModalContext | undefined
>(undefined);
