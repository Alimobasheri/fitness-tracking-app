import { Card, Text, useTheme } from "@rneui/themed";
import { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";
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
      <Card
        containerStyle={{
          ...styles.cardContainer,
          backgroundColor: theme.colors.primary,
        }}
      >
        {session.imageSrc && <Card.Image source={session.imageSrc} />}
        <Text h4 style={{ color: theme.colors.white }}>
          {session.name}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default SessionCard;
