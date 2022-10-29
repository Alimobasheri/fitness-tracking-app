import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    width: "100%",
    minHeight: 60,
  },
  wrapper: {
    width: "100%",
    paddingHorizontal: 36,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  leftNumber: {
    fontSize: 36,
    fontWeight: "900",
    minWidth: 60,
  },
  leftTextWrapper: {
    marginLeft: 12,
  },
  leftText: {
    fontSize: 18,
    fontWeight: "100",
  },
  timeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  timetitleText: {
    fontWeight: "250",
    fontSize: 14,
    lineHeight: 16,
    marginRight: 6,
  },
  timeBody: {
    justifyContent: "center",
    flexDirection: "row",
  },
  timeText: {
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 22,
    paddingHorizontal: 1,
  },
});
