import { LinkingOptions } from "@react-navigation/native";

export const linking: LinkingOptions<any> = {
  prefixes: ["fitness://"],
  config: {
    screens: {
      Home: {
        screens: {
          SessionsList: "/sessions",
          Profile: "/profile",
        },
      },
      SessionOverview: "/sessions/overview",
      Session: "/sessions/start",
    },
  },
};
