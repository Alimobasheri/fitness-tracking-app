import { NavigationContext } from "@react-navigation/native";
import { Button, Text, useTheme, Dialog, CheckBox } from "@rneui/themed";
import { FC, useContext, useState } from "react";
import { View } from "react-native";

const FinishWorkoutButton: FC<{}> = ({}) => {
  const navigation = useContext(NavigationContext);
  const { theme } = useTheme();
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const [shouldSaveProgress, setShouldSaveProgress] = useState<boolean>(true);
  const onPress = () => {
    setIsDialogVisible(true);
  };
  const closeDialog = () => {
    setIsDialogVisible(false);
  };
  const toggleCheckbox = () => setShouldSaveProgress(!shouldSaveProgress);
  const onPressConfirm = () => {
    navigation.canGoBack() && navigation.goBack();
    closeDialog();
  };
  return (
    <View>
      <Button
        type="outline"
        title={"Finish Workout"}
        color={theme.colors.secondary}
        buttonStyle={{
          borderColor: theme.colors.error,
        }}
        titleStyle={{
          color: theme.colors.error,
          fontWeight: "230",
        }}
        titleProps={{
          numberOfLines: 1,
          adjustsFontSizeToFit: true,
        }}
        onPress={onPress}
      />

      <Dialog isVisible={isDialogVisible} onBackdropPress={closeDialog}>
        <Dialog.Title title="Finish Session?" />
        <Text>
          You haven't reached the end of this session and your progress will not
          be completed.
        </Text>
        <CheckBox
          checked={shouldSaveProgress}
          onPress={toggleCheckbox}
          title="Save my progress"
          containerStyle={{
            marginLeft: 0,
            paddingLeft: 0,
          }}
        />
        <Dialog.Actions>
          <Dialog.Button
            title={"CONFIRM"}
            onPress={onPressConfirm}
            titleStyle={{
              color: theme.colors.error,
            }}
          />
          <Dialog.Button
            title={"CANCEL"}
            onPress={closeDialog}
            titleStyle={{
              color: theme.colors.primary,
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default FinishWorkoutButton;
