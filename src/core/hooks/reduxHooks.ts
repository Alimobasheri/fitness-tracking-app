import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDisaptch } from "../store";

export const useAppDispatch: () => AppDisaptch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
