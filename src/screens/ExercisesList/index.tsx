import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../constants/navigation";
import ExerciseList from "../../containers/WorkoutsList";

type ExercisesListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ExercisesList"
>;

const ExercisesListScreen = ({ navigation }: ExercisesListScreenProps) => {
  return <ExerciseList navigation={navigation} />;
};

export default ExercisesListScreen;
