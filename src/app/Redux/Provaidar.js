"use client";
import { Provider } from "react-redux";
import { store } from "@/store"; // ✅ named import

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;

};
