import {StyleSheet} from "react-native"

export default StyleSheet.create({
  root: {
    width: "100%",
    height: "20%",
    maxHeight: 100,
    minHeight: 60,
  },
  wrapper: {
    width: "100%",
    paddingHorizontal: 36,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftWrapper: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  leftNumber: {
    fontSize: 36,
    fontWeight: "900"
  },
  leftTextWrapper: {
    marginLeft: 12,
  },
  leftText: {
    fontSize: 18,
    fontWeight: "100",
  }
})