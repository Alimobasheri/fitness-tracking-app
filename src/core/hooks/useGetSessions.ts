import { DEFAULT_SESSIONS } from "../../constants/sessions";
import { WorkoutSessionObject } from "../../types/workout";

/**
 * Returns a workout session with the specified session ID, or all workout sessions if no session ID is provided.
 * @param sessionId The ID of the session to return. Can be a number or a string.
 * @returns A workout session object if a session ID is provided, or an object containing all workout sessions if no session ID is provided.
 */
const useGetSession = (
  sessionId: number | string | undefined = undefined
): ReturnType<typeof useGetSession> => {
  if (typeof sessionId === "number" || typeof sessionId === "string") {
    const id = typeof sessionId === "string" ? parseInt(sessionId) : sessionId;
    return Object.values(DEFAULT_SESSIONS).find(
      (session) => session.sessionId === id
    );
  } else {
    return DEFAULT_SESSIONS;
  }
};

export default useGetSession;
