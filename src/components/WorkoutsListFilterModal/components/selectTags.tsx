import { Text, useTheme } from "@rneui/themed";
import { FC, useContext, useMemo } from "react";
import { View } from "react-native";
import { WorkoutsListFilterModalContext } from "../contexts/WorkoutsListFilterModalContext";
import { useAppSelector } from "../../../core/hooks/reduxHooks";

interface TagProps {
  option: string;
  inverted?: boolean;
}
const Tag: FC<TagProps> = ({ option, inverted }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        borderRadius: 7,
        backgroundColor: !inverted ? theme.colors.black : "transparent",
        marginRight: 6,
      }}
    >
      <Text
        style={{
          color: !inverted ? theme.colors.white : theme.colors.grey3,
        }}
      >
        {option.replaceAll("_", " ")}
      </Text>
    </View>
  );
};

interface SelectTagsProps {
  name: string;
}

export const SelectTags: FC<SelectTagsProps> = ({ name }) => {
  const {
    typesFilter,
    equipmentFilter,
    muscleGroupFilter,
    difficultiesFilter,
  } = useAppSelector((state) => state.workoutsList);
  const selectedOptions = useMemo(() => {
    switch (name) {
      case "filter-types":
        return typesFilter;
      case "filter-equipments":
        return equipmentFilter;
      case "filter-muscles":
        return muscleGroupFilter;
      case "filter-difficulties":
        return difficultiesFilter;
      default:
        return [];
    }
  }, [
    name,
    typesFilter,
    difficultiesFilter,
    equipmentFilter,
    muscleGroupFilter,
  ]);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {selectedOptions.length > 0 ? (
        <>
          {[...selectedOptions]
            .splice(0, selectedOptions.length > 3 ? 3 : selectedOptions.length)
            .map((option) => (
              <Tag key={option} option={option} />
            ))}
          {selectedOptions.length > 3 && (
            <Tag
              key={"more"}
              option={`${selectedOptions.length - 3}+ more`}
              inverted
            />
          )}
        </>
      ) : (
        <Tag
          key={"No Filter Selected"}
          option={"No Filter Selected"}
          inverted
        />
      )}
    </View>
  );
};
