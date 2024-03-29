import { AppDispatch, RootState } from "@/redux/features/store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

//creating a cutome hook.

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

