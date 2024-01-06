import React, { useCallback, useEffect, useState, useRef } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Icon, useTheme, SearchBar, Button, Text } from "@rneui/themed";
import EXERCISES from "../../constants/exercises.json";
import { SCREEN_NAMES } from "../../constants/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WorkoutsListFilterModal from "../../components/WorkoutsListFilterModal";
import { useAppSelector } from "../../core/hooks/reduxHooks";

const ExerciseList = ({ navigation }) => {
  const { theme } = useTheme();

  const insets = useSafeAreaInsets();
  const modalRef = useRef();

  const {
    equipmentFilter,
    typesFilter,
    muscleGroupFilter,
    difficultiesFilter,
  } = useAppSelector((state) => state.workoutsList);

  // State for the search input and the list of exercises
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  // State for the modal and the selected equipment and muscle group filters
  const [showModal, setShowModal] = useState(false);

  // Function to fetch the list of exercises from the ExRx API
  const fetchExercises = async () => {
    setExercises(
      EXERCISES.exercises.sort((a, b) => a.name.localeCompare(b.name))
    );
  };
  // Function to open the modal
  const openModal = () => modalRef.current?.openModal?.();

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to apply the selected filters
  const applyFilters = () => {
    // closeModal();
    fetchExercises();
    console.log(
      typesFilter,
      muscleGroupFilter,
      equipmentFilter,
      difficultiesFilter
    );
    const isTypesFiltered = typesFilter.length > 0;
    console.log(
      "🚀 ~ file: index.tsx:55 ~ applyFilters ~ isTypesFiltered:",
      isTypesFiltered
    );
    const isMuscleGroupsFiltered = muscleGroupFilter.length > 0;
    console.log(
      "🚀 ~ file: index.tsx:57 ~ applyFilters ~ isMuscleGroupsFiltered:",
      isMuscleGroupsFiltered
    );
    const isEquipmentsFiltered = equipmentFilter.length > 0;
    console.log(
      "🚀 ~ file: index.tsx:59 ~ applyFilters ~ isEquipmentsFiltered:",
      isEquipmentsFiltered
    );
    const isDifficultiesFiltered = difficultiesFilter.length > 0;
    console.log(
      "🚀 ~ file: index.tsx:61 ~ applyFilters ~ isDifficultiesFiltered:",
      isDifficultiesFiltered
    );
    const filteredExercises = EXERCISES.exercises.filter((exc) => {
      if (isTypesFiltered && !typesFilter.includes(exc.type)) return false;
      if (isMuscleGroupsFiltered && !muscleGroupFilter.includes(exc.muscle))
        return false;
      if (isEquipmentsFiltered && !equipmentFilter.includes(exc.equipment))
        return false;
      if (
        isDifficultiesFiltered &&
        !difficultiesFilter.includes(exc.difficulty)
      )
        return false;
      return true;
    });
    setExercises(
      filteredExercises.sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  // Function to reset the filters
  const resetFilters = () => {
    // setEquipmentFilter([]);
    // setMuscleGroupFilter("");
    closeModal();
    fetchExercises();
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  useEffect(() => {
    setExercises(
      EXERCISES.exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  // Function to render an item in the FlatList
  const renderItem = useCallback(({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigateToExercise(item.id)}>
        {/* Use the Transition component to wrap the card and add a custom transition */}
        {/* <Transition shared={`exercise${item.id}`}> */}
        <Card
          containerStyle={{
            borderRadius: 10,
            margin: 20,
            // backgroundColor: theme.colors.grey5,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Text>{item.name}</Text>
          <Text style={{ color: theme.colors.grey3, marginTop: 6 }}>
            {item.muscle}
          </Text>
        </Card>
        {/* </Transition> */}
      </TouchableOpacity>
    );
  }, []);

  // Function to navigate to the exercise detail screen
  const navigateToExercise = (exerciseId) => {
    // Navigate to the exercise detail screen and pass the exerciseId as a prop
    navigation.navigate(SCREEN_NAMES.EXERCISE, { exerciseId });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 10,
        }}
      >
        {/* Search input */}
        <SearchBar
          lightTheme
          value={search}
          onChangeText={setSearch}
          placeholder="Search exercises"
          containerStyle={{
            backgroundColor: theme.colors.white,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            minWidth: "80%",
            alignItems: "center",
          }}
          inputContainerStyle={{
            backgroundColor: theme.colors.grey5,
            // borderWidth: StyleSheet.hairlineWidth,
            // borderBottomWidth: StyleSheet.hairlineWidth,
            borderRadius: 10,
          }}
          style={{
            fontWeight: "300",
          }}
          inputStyle={{
            color: theme.colors.black,
          }}
          placeholderTextColor={theme.colors.grey3}
        />
        <Button
          style={{
            borderColor: theme.colors.black,
          }}
          color={theme.colors.grey5}
          icon={
            <Icon
              type="ionicon"
              name="filter-outline"
              color={theme.colors.black}
            />
          }
          containerStyle={{ alignItems: "center", justifyContent: "center" }}
          onPress={openModal}
          buttonStyle={{
            borderRadius: 10,
            // borderWidth: 1,
          }}
        />
      </View>
      {/* Modal for selecting filters */}
      <WorkoutsListFilterModal ref={modalRef} applyFilters={applyFilters} />
      {/* FlatList to display the exercises */}
      <FlatList
        // contentContainerStyle={{
        //   borderTopLeftRadius: 45,
        //   borderTopRightRadius: 45,
        //   backgroundColor: theme.colors.primary,
        //   paddingTop: 20,
        //   marginTop: 24,
        // }}
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ExerciseList;
