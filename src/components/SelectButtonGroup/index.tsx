import { Button, Text, useTheme } from "@rneui/themed";
import { FC } from "react";
import { View } from "react-native";
import styles from "./styles";

interface SelectButtonGroupOptionsType {
  title: string;
  value: any;
}

type SelectButtonGroupOnChange = (options: any[]) => void;

interface SelectButtonGroupProps {
  options: SelectButtonGroupOptionsType[];
  selectedOptions: string[];
  selectedColor?: string;
  onChange: SelectButtonGroupOnChange;
}

const SelectButtonGroup: FC<SelectButtonGroupProps> = ({
  options,
  selectedOptions,
  selectedColor,
  onChange,
}) => {
  const { theme } = useTheme();
  const handleOnPress = (optionValue: any) => {
    if (selectedOptions.includes(optionValue))
      onChange(selectedOptions.filter((option) => option !== optionValue));
    else onChange([...selectedOptions, optionValue]);
  };
  return (
    <View style={styles.root}>
      {options.map(({ title, value }, index) => (
        <Button
          type={selectedOptions.includes(value) ? "solid" : "outline"}
          key={index}
          title={title}
          style={styles.buttonWrapper}
          buttonStyle={{ ...styles.button, borderColor: theme.colors.black }}
          titleStyle={{
            color: selectedOptions.includes(value)
              ? theme.colors.white
              : theme.colors.black,
          }}
          onPress={() => handleOnPress(value)}
          color={theme.colors.black}
        />
      ))}
    </View>
  );
};

export default SelectButtonGroup;
