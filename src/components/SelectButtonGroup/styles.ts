import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  buttonWrapper: {
    marginVertical: 6,
    marginHorizontal: 6,
  },
  button: {
    borderRadius: 7,
  },
});
