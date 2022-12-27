import { Text, useTheme } from "@rneui/themed";
import { FC, useCallback } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { WorkoutSessionObject } from "../../types/workout";
import styles from "./styles";

export interface SessionCardProps {
  session: WorkoutSessionObject;
  redirect: (arg0: number) => void;
}

const SessionCard: FC<SessionCardProps> = ({
  session,
  redirect,
}: SessionCardProps) => {
  const { theme } = useTheme();

  const handlePress = useCallback(
    () => redirect(session.sessionId),
    [session.sessionId, redirect]
  );
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: theme.colors.primary,
        }}
      >
        {session.imageSrc && (
          <Image source={session.imageSrc} style={styles.cardImage} />
        )}
        <Text
          h4
          style={{ color: theme.colors.white, width: "60%" }}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {session.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SessionCard;
