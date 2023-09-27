"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem attribute="class">
        <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
      </ThemeProvider>
    </Provider>
  );
}
