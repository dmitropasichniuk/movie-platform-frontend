import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useScrollToTop = () => {
  useEffect(() => {
    const scrollTarget =
      document.getElementById("root") ?? document.scrollingElement;
    scrollTarget?.scrollTo({ top: 0, behavior: "auto" });
  }, []);
};
