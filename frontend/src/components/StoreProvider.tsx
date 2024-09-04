"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../app/lib/store";
import {
  fetchBarChartData,
  fetchCandlestickData,
  fetchLineChartData,
  fetchPieChartData,
} from "@/app/lib/slices/chartSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(fetchBarChartData());
    storeRef.current.dispatch(fetchCandlestickData());
    storeRef.current.dispatch(fetchLineChartData());
    storeRef.current.dispatch(fetchPieChartData());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
