import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    flex: 1,
    paddingHorizontal: 12,
  },
  cardContainer: {
    borderRadius: 12,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: width / 40,
    alignItems: "center",
    width: (width / 3) * 2,
  },
  cardImage: {
    marginRight: 12,
    width: width / 5,
    height: width / 5,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
