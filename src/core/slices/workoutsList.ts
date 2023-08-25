import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  equipmentFilter: [],
  typesFilter: [],
  muscleGroupFilter: [],
  difficultiesFilter: [],
};

interface ISetFilterPayload {
  equipmentFilter: string[];
  typesFilter: string[];
  muscleGroupFilter: string[];
  difficultiesFilter: string[];
}

export const workoutListsSlice = createSlice({
  name: "workoutsList",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ISetFilterPayload>) => {
      state = action.payload;
    },
    setEquipmentsFilter: (state, action: PayloadAction<string[]>) => {
      state.equipmentFilter = action.payload;
    },
    setTypesFilter: (state, action: PayloadAction<string[]>) => {
      state.typesFilter = action.payload;
    },
    setMuscleGroupFilter: (state, action: PayloadAction<string[]>) => {
      state.muscleGroupFilter = action.payload;
    },
    setDifficultiesFilter: (state, action: PayloadAction<string[]>) => {
      state.difficultiesFilter = action.payload;
    },
  },
});

export const {
  setFilter,
  setEquipmentsFilter,
  setDifficultiesFilter,
  setTypesFilter,
  setMuscleGroupFilter,
} = workoutListsSlice.actions;

export const selectFilter = (state: RootState) => state.workoutsList;

export default workoutListsSlice.reducer;
