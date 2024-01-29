import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, useTheme } from "@rneui/themed";
import {
  EXERCISE_EQUIPMENTS,
  EXERCISE_MUSCLES,
} from "../../constants/exercise-filters";
import CustomBackdrop from "../Modal/CustomBackdrop";
import SelectButtonGroup from "../SelectButtonGroup";
import { MainFilterScreen } from "./screens/MainFilterScreen";
import { WorkoutsListFilterModalContext } from "./contexts/WorkoutsListFilterModalContext";
import { FilterSectionScreen } from "./screens/FilterSectionScreen";
import { Dimensions, StyleSheet } from "react-native";
import { Easing, useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../core/hooks/reduxHooks";

const Stack = createNativeStackNavigator();

interface WorkoutsListFilterModalProps {
  applyFilters: () => void;
}

interface WorkoutsListFilterModalRef {
  openModal: () => void;
}

const WorkoutsListFilterModal = forwardRef<
  WorkoutsListFilterModalRef,
  WorkoutsListFilterModalProps
>(({ applyFilters }, ref) => {
  const {
    equipmentFilter,
    typesFilter,
    muscleGroupFilter,
    difficultiesFilter,
  } = useAppSelector((state) => state.workoutsList);
  const modalRef = useRef();

  const { theme } = useTheme();

  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("window");

  const initialSnapPoints = useMemo(() => [height - insets.top], []);

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 500,
    easing: Easing.inOut(Easing.exp),
  });

  const openModal = () => {
    !!modalRef.current &&
      typeof modalRef.current?.present === "function" &&
      modalRef.current.present(0);
  };

  const updateFIlters = () => {
    applyFilters();
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <BottomSheetModal
      containerStyle={{
        borderRadius: 12,
        padding: 24,
        flex: 1,
        justifyContent: "center",
      }}
      ref={modalRef}
      snapPoints={initialSnapPoints}
      index={0}
      enablePanDownToClose={true}
      backdropComponent={CustomBackdrop}
      animationConfigs={animationConfigs}
      onDismiss={updateFIlters}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <WorkoutsListFilterModalContext.Provider
          value={{
            modalRef,
            typesFilter,
            equipmentFilter,
            muscleGroupFilter,
            difficultiesFilter,
          }}
        >
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: {
                  backgroundColor: theme.colors.background,
                  borderWidth: 0,
                  borderTopWidth: StyleSheet.hairlineWidth,
                  paddingTop: 24,
                },
                headerShown: true,
                headerTitle: "",
                headerBackTitle: "Filters",
                headerLargeTitleShadowVisible: false,
                headerTintColor: theme.colors.black,
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: theme.colors.background,
                    borderWidth: 0,
                    borderTopWidth: 0,
                    paddingTop: 0,
                  },
                }}
                name="filter-main"
                component={MainFilterScreen}
              />
              {[
                {
                  name: "filter-types",
                },
                {
                  name: "filter-equipments",
                },
                {
                  name: "filter-muscles",
                },
                {
                  name: "filter-difficulties",
                },
              ].map((screen) => (
                <Stack.Screen
                  key={screen.name}
                  name={screen.name}
                  component={FilterSectionScreen}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </WorkoutsListFilterModalContext.Provider>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default WorkoutsListFilterModal;
