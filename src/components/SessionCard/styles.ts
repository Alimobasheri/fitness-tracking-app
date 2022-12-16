import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardContainer: {
    borderRadius: 12,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    minHeight: 200,
  },
  cardImage: {
    margin: 20,
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 15,
  },
});
