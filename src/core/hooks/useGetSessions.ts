import { DEFAULT_SESSIONS } from "../../constants/sessions";

const useGetSession = (sessionId: number | undefined = undefined) => {
  if (!!sessionId && typeof sessionId === "number") {
    const session = Object.values(DEFAULT_SESSIONS).find(
      (session) => session.sessionId === sessionId
    );
    return session;
  } else {
    return DEFAULT_SESSIONS;
  }
};

export default useGetSession;
