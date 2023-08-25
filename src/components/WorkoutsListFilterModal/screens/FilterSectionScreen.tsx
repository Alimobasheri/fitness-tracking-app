import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Text, useTheme } from "@rneui/themed";
import { useContext, useEffect, useMemo } from "react";
import { View } from "react-native";
import { FILTER_SCREEN_NAMES_TO_OPTIONS } from "../../../constants/exercise-filters";
import SelectButtonGroup from "../../SelectButtonGroup";
import { WorkoutsListFilterModalContext } from "../contexts/WorkoutsListFilterModalContext";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import {
  setDifficultiesFilter,
  setEquipmentsFilter,
  setMuscleGroupFilter,
  setTypesFilter,
} from "../../../core/slices/workoutsList";

export const FilterSectionScreen = ({ route, navigation }) => {
  const { name } = route;
  const { theme } = useTheme();
  const {
    equipmentFilter,
    typesFilter,
    muscleGroupFilter,
    difficultiesFilter,
  } = useAppSelector((state) => state.workoutsList);
  const dispatch = useAppDispatch();
  const { modalRef } = useContext(WorkoutsListFilterModalContext);

  const filter_options = useMemo(() => {
    return FILTER_SCREEN_NAMES_TO_OPTIONS[name];
  }, [name]);

  let selectedOptions = [];
  switch (name) {
    case "filter-types":
      selectedOptions = typesFilter;
      break;
    case "filter-equipments":
      selectedOptions = equipmentFilter;
      break;
    case "filter-muscles":
      selectedOptions = muscleGroupFilter;
      break;
    case "filter-difficulties":
      selectedOptions = difficultiesFilter;
      break;
    default:
      selectedOptions = [];
      break;
  }

  const handleOnChange = (values: string[]): void => {
    switch (name) {
      case "filter-types":
        dispatch(setTypesFilter(values));
        return;
      case "filter-equipments":
        dispatch(setEquipmentsFilter(values));
        return;
      case "filter-muscles":
        dispatch(setMuscleGroupFilter(values));
        return;
      case "filter-difficulties":
        dispatch(setDifficultiesFilter(values));
        return;
      default:
        return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        paddingTop: 0,
      }}
    >
      <Text
        h3
        style={{
          fontWeight: "bold",
          marginBottom: 12,
          textTransform: "capitalize",
        }}
      >
        {name.split("-")[1]}
      </Text>
      <BottomSheetScrollView>
        <SelectButtonGroup
          options={Object.values(filter_options).map((value: string) => ({
            title: value.replaceAll("_", " "),
            value,
          }))}
          selectedOptions={selectedOptions}
          selectedColor={theme.colors.primary}
          onChange={handleOnChange}
        />
      </BottomSheetScrollView>
    </View>
  );
};
