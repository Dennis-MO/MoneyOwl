import { createContext, useState, useContext } from "react";

/*STEP 1 — write a placeholder in createContext*/
const DataContext = createContext({
  cashSavings: "",
  changeCashSavings: (_v: string) => {},
});

/*STEP 2 & 3 — useState and Provider must live INSIDE a component function*/
export function DataProvider({ children }: { children: React.ReactNode }) {
  const [cashSavings, setCashSavings] = useState("");

  return (
    <DataContext.Provider value={{ cashSavings, changeCashSavings: setCashSavings }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
