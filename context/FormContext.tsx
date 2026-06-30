import { createContext, useContext, useState } from "react";

const FormContext = createContext({
  income: "1000",
  expenses: "2000",
  setIncome: (v: string) => {},
  setExpenses: (v: string) => {},
});

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  return (
    <FormContext.Provider value={{ income, expenses, setIncome, setExpenses }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
